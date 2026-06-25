// Shared Checklist JS Logic
(function () {
    // Ensure subjectId is defined, otherwise fallback
    const subId = window.subjectId || 'generic';
    const STORAGE_KEY = `sem8_checklist_${subId}`;
    const data = window.checklistData || [];

    let state = {};

    function loadState() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) state = JSON.parse(saved);
        } catch (e) {
            state = {};
        }
    }

    function saveState() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (e) {}
    }

    function totalItems() {
        return data.reduce((acc, s) => acc + s.items.length, 0);
    }

    function doneItems() {
        return Object.values(state).filter(Boolean).length;
    }

    function sectionDone(sec) {
        return sec.items.filter((_, i) => state[sec.id + '_' + i]).length;
    }

    // Render Checklist
    const tagClass = { new: 'p-new', revise: 'p-revise', strong: 'p-strong' };
    const tagLabel = { new: 'new', revise: 'revise', strong: 'strong' };

    function buildChecklist() {
        const container = document.getElementById('sections-container');
        if (!container) return;

        container.innerHTML = '';

        // If no data, render a premium empty state
        if (data.length === 0) {
            const examDateStr = window.examDate || 'Soon';
            container.innerHTML = `
                <div class="empty-state">
                    <i class="ti ti-checklist empty-icon" aria-hidden="true"></i>
                    <h2 class="empty-title">Checklist Empty</h2>
                    <p class="empty-desc">Study checklist contents for this subject are not available yet.</p>
                    <div style="font-size: 13px; color: var(--text-secondary); font-weight: 500; margin-top: 0.5rem;">
                        <i class="ti ti-calendar" aria-hidden="true"></i> Exam Scheduled: ${examDateStr}
                    </div>
                </div>
            `;
            // Hide progress and tabs since they are not needed for empty state
            const progressEl = document.querySelector('.global-progress');
            if (progressEl) progressEl.style.display = 'none';
            const tabsEl = document.querySelector('.tabs');
            if (tabsEl) tabsEl.style.display = 'none';
            return;
        }

        data.forEach(sec => {
            const done = sectionDone(sec);
            const total = sec.items.length;

            const el = document.createElement('div');
            el.className = 'section';
            el.id = 'sec-' + sec.id;

            el.innerHTML = `
                <button class="section-header" onclick="checklist.toggleSection('${sec.id}')" aria-expanded="false" aria-controls="items-${sec.id}">
                    <div class="sec-left">
                        <span class="sec-title">${sec.title}</span>
                        <span class="day-badge day${sec.day}" aria-label="Day ${sec.day}">Day ${sec.day}</span>
                        <span class="priority-tag ${tagClass[sec.tag]}" aria-label="${tagLabel[sec.tag]}">${tagLabel[sec.tag]}</span>
                    </div>
                    <div class="sec-right">
                        <span class="sec-progress" id="prog-${sec.id}">${done}/${total}</span>
                        <i class="ti ti-chevron-down sec-chevron" id="chev-${sec.id}" aria-hidden="true"></i>
                    </div>
                </button>
                <div class="section-mini-bar">
                    <div class="section-mini-fill" id="mini-${sec.id}" style="width:${total ? Math.round(done / total * 100) : 0}%"></div>
                </div>
                <div class="items-list" id="items-${sec.id}" role="list">
                    ${sec.items.map((item, i) => {
                        const key = sec.id + '_' + i;
                        const checked = !!state[key];
                        return `
                            <label class="item-row${checked ? ' done' : ''}" id="row-${key}" role="listitem">
                                <input type="checkbox" class="item-check" ${checked ? 'checked' : ''} onchange="checklist.toggle('${sec.id}', ${i})" aria-label="${item}" />
                                <span class="item-text">${item}</span>
                            </label>
                        `;
                    }).join('')}
                </div>
            `;
            container.appendChild(el);
        });

        const totalCountEl = document.getElementById('total-count');
        if (totalCountEl) totalCountEl.textContent = totalItems();
        updateGlobalProgress();
    }

    function toggleSection(id) {
        const items = document.getElementById('items-' + id);
        const chev = document.getElementById('chev-' + id);
        if (!items || !chev) return;

        const header = items.previousElementSibling.previousElementSibling;
        const isOpen = items.classList.contains('open');
        items.classList.toggle('open', !isOpen);
        chev.classList.toggle('open', !isOpen);
        if (header) header.setAttribute('aria-expanded', String(!isOpen));
    }

    function toggle(secId, idx) {
        const key = secId + '_' + idx;
        state[key] = !state[key];
        saveState();

        const row = document.getElementById('row-' + key);
        if (row) {
            row.classList.toggle('done', state[key]);
            const input = row.querySelector('input');
            if (input) input.checked = state[key];
        }

        updateSectionProgress(secId);
        updateGlobalProgress();
    }

    function updateSectionProgress(secId) {
        const sec = data.find(s => s.id === secId);
        if (!sec) return;
        const done = sectionDone(sec);
        const total = sec.items.length;
        const progEl = document.getElementById('prog-' + secId);
        if (progEl) progEl.textContent = done + '/' + total;
        const pct = total ? Math.round(done / total * 100) : 0;
        const miniEl = document.getElementById('mini-' + secId);
        if (miniEl) miniEl.style.width = pct + '%';
    }

    function updateGlobalProgress() {
        const total = totalItems();
        const done = doneItems();
        const pct = total ? Math.round(done / total * 100) : 0;

        const doneCountEl = document.getElementById('done-count');
        const totalCountEl = document.getElementById('total-count');
        const progBarEl = document.getElementById('prog-bar');
        const progPctEl = document.getElementById('prog-pct');
        const progAriaEl = document.getElementById('prog-aria');

        if (doneCountEl) doneCountEl.textContent = done;
        if (totalCountEl) totalCountEl.textContent = total;
        if (progBarEl) progBarEl.style.width = pct + '%';
        if (progPctEl) progPctEl.textContent = pct + '%';
        if (progAriaEl) {
            progAriaEl.setAttribute('aria-valuenow', pct);
        }
    }

    // Tabs Switching
    function switchTab(tab) {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            const isActive = btn.id === 'tab-' + tab;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-selected', String(isActive));
        });
        document.querySelectorAll('.panel').forEach(p => {
            p.classList.toggle('active', p.id === 'panel-' + tab);
        });
    }

    // Reset Progress
    function confirmReset() {
        if (confirm('Reset all progress? This cannot be undone.')) {
            state = {};
            saveState();
            buildChecklist();
        }
    }

    // Initialize on load
    window.addEventListener('DOMContentLoaded', () => {
        loadState();
        buildChecklist();
    });

    // Expose functions globally under 'checklist' namespace
    window.checklist = {
        toggleSection,
        toggle,
        switchTab,
        confirmReset
    };
})();
