/**
 * notes-viewer.js — Global Markdown-driven notes renderer
 * Reads ./notes.md in the current subject folder, parses it with marked.js,
 * and renders the full Notion-like single-page notes view.
 *
 * Configured per-subject via window.notesConfig:
 *   subject    — Subject display name
 *   code       — Course code (e.g. "OEC-CS801B")
 *   checklistUrl — Relative URL to the subject's checklist page
 *   unitIcons  — Array of Tabler icon class suffixes, one per unit (in order)
 */

(function () {
    'use strict';

    // ── Helpers ──────────────────────────────────────────────────────────────

    function slugify(text) {
        return text
            .toLowerCase()
            .replace(/\*\*/g, '')          // strip markdown bold markers that may remain
            .replace(/[★\-–—]+/g, '-')     // convert dashes and stars to hyphens
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    }

    function shortTitle(title) {
        return title
            .replace(/\*\*/g, '')
            .replace(/^UNIT\s+\d+[A-Z]?\s*[-–—]\s*/i, '')
            .replace(/\s*&\s*Public Key Infrastructure.*/i, ' & PKI')
            .replace(/Cyber Ethics.*/i, 'Cyber Ethics')
            .replace(/Tools\s*&\s*Methods.*/i, 'Tools & Methods')
            .replace(/Introduction to /i, '')
            .replace(/\s*\(OEC.*/i, '')
            .replace(/\s*\(PKI\).*/i, '')
            .trim();
    }

    function getIcon(index, config) {
        const icons = config.unitIcons || [];
        return icons[index] ? 'ti-' + icons[index] : 'ti-file-text';
    }

    // ── Markdown Post-Processing ──────────────────────────────────────────────

    function processContent(htmlStr) {
        const div = document.createElement('div');
        div.innerHTML = htmlStr;

        // Remove <strong> wrapping from h2/h3/h4 (marked renders **text** as <strong>)
        div.querySelectorAll('h2 strong, h3 strong, h4 strong').forEach(el => {
            el.replaceWith(...el.childNodes);
        });

        // Slugify h2 headings for anchor deep-links from checklist
        div.querySelectorAll('h2').forEach(h2 => {
            h2.id = slugify(h2.textContent);
        });

        // Wrap tables for horizontal scroll on mobile
        div.querySelectorAll('table').forEach(table => {
            if (!table.parentElement.classList.contains('table-scroll')) {
                const wrapper = document.createElement('div');
                wrapper.className = 'table-scroll';
                table.parentNode.insertBefore(wrapper, table);
                wrapper.appendChild(table);
            }
        });

        // Remove stray emoji exam tips that may remain from markdown
        div.querySelectorAll('p, em').forEach(el => {
            if (el.textContent.startsWith('📝')) {
                el.textContent = el.textContent.replace(/^📝\s*/, '');
            }
        });

        return div.innerHTML;
    }

    // ── Split parsed HTML into units at <h1> boundaries ──────────────────────

    function splitIntoUnits(fullHtml) {
        const container = document.createElement('div');
        container.innerHTML = fullHtml;

        const children = Array.from(container.childNodes);
        const units = [];
        let currentUnit = null;

        children.forEach(node => {
            if (node.nodeName === 'H1') {
                // Start a new unit at each H1
                const titleText = node.textContent.replace(/\*\*/g, '').trim();

                // Skip the "Table of Contents" H1
                if (/table of contents/i.test(titleText)) return;

                currentUnit = { title: titleText, nodes: [] };
                units.push(currentUnit);
            } else if (currentUnit) {
                currentUnit.nodes.push(node);
            }
            // Content before the first H1 (preamble) is skipped
        });

        return units;
    }

    // ── Build Unit Nav ────────────────────────────────────────────────────────

    function buildUnitNav(units, config) {
        const inner = document.getElementById('unit-nav-inner');
        if (!inner) return;
        inner.innerHTML = '';

        units.forEach((unit, i) => {
            const btn = document.createElement('a');
            btn.className = 'notes-unit-nav-item' + (i === 0 ? ' active' : '');
            btn.id = 'nav-unit-' + i;
            btn.href = '#unit-' + i;
            btn.setAttribute('aria-label', 'Jump to ' + unit.title);

            const icon = getIcon(i, config);
            btn.innerHTML = `<i class="ti ${icon}" aria-hidden="true"></i><span>${shortTitle(unit.title)}</span>`;

            btn.addEventListener('click', e => {
                e.preventDefault();
                const el = document.getElementById('unit-' + i);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                window.history.replaceState(null, '', '#unit-' + i);
            });

            inner.appendChild(btn);
        });
    }

    // ── Build All Units ───────────────────────────────────────────────────────

    function buildAllUnits(units, config) {
        const main = document.getElementById('notes-main');
        if (!main) return;
        main.innerHTML = '';

        const checklistUrl = config.checklistUrl || './';

        units.forEach((unit, i) => {
            // Reconstruct unit's inner HTML
            const tempDiv = document.createElement('div');
            unit.nodes.forEach(n => tempDiv.appendChild(n.cloneNode(true)));

            const rawContent = processContent(tempDiv.innerHTML);
            const topicCount = (rawContent.match(/<h2/g) || []).length;
            const tableCount = (rawContent.match(/<table/g) || []).length;
            const icon = getIcon(i, config);

            const section = document.createElement('section');
            section.className = 'notes-unit';
            section.id = 'unit-' + i;

            section.innerHTML = `
                <div class="notes-unit-header">
                    <div class="notes-unit-icon">
                        <i class="ti ${icon}" aria-hidden="true"></i>
                    </div>
                    <div>
                        <div class="notes-unit-title">${unit.title.replace(/\*\*/g, '')}</div>
                        <div class="notes-unit-meta">
                            <span><i class="ti ti-layout-list" aria-hidden="true"></i> ${topicCount} sub-topics</span>
                            <span><i class="ti ti-table" aria-hidden="true"></i> ${tableCount} tables</span>
                        </div>
                    </div>
                </div>
                <a href="${checklistUrl}" class="notes-checklist-chip" aria-label="Open checklist for this unit">
                    <i class="ti ti-checkbox" aria-hidden="true"></i> Track in checklist
                </a>
                <div class="notes-doc">${rawContent}</div>
            `;

            main.appendChild(section);

            // Divider between units
            if (i < units.length - 1) {
                const divider = document.createElement('div');
                divider.className = 'notes-unit-divider';
                main.appendChild(divider);
            }
        });
    }

    // ── Scrollspy ─────────────────────────────────────────────────────────────

    function initScrollspy() {
        const navItems = document.querySelectorAll('.notes-unit-nav-item');
        const sections = document.querySelectorAll('.notes-unit');
        if (!sections.length) return;

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        navItems.forEach(item => {
                            item.classList.toggle('active', item.id === 'nav-' + id);
                        });
                        const activeItem = document.getElementById('nav-' + id);
                        if (activeItem) {
                            activeItem.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
                        }
                    }
                });
            },
            { rootMargin: '-110px 0px -60% 0px', threshold: 0 }
        );

        sections.forEach(sec => observer.observe(sec));
    }

    // ── Handle URL hash scrolling ─────────────────────────────────────────────

    function scrollToHash(hash) {
        if (!hash) return;
        const el = document.getElementById(hash);
        if (el) {
            setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
        }
    }

    // ── Main Init ─────────────────────────────────────────────────────────────

    async function init() {
        const config = window.notesConfig || {};

        // Show a loading indicator while fetching
        const main = document.getElementById('notes-main');
        if (main) {
            main.innerHTML = '<div class="notes-loading">Loading notes…</div>';
        }

        try {
            const response = await fetch('./notes.md');
            if (!response.ok) throw new Error(`Could not load notes.md (${response.status})`);
            const markdown = await response.text();

            // Parse with marked.js
            if (typeof marked === 'undefined') throw new Error('marked.js not loaded');
            const fullHtml = marked.parse(markdown);

            const units = splitIntoUnits(fullHtml);

            buildUnitNav(units, config);
            buildAllUnits(units, config);
            initScrollspy();

            // Handle initial URL hash
            scrollToHash(window.location.hash.slice(1));

        } catch (err) {
            if (main) {
                main.innerHTML = `<div class="notes-loading" style="color:var(--accent-red, #e74c3c)">
                    Error loading notes: ${err.message}
                </div>`;
            }
            console.error('[notes-viewer]', err);
        }
    }

    // Listen for hash changes after initial load
    window.addEventListener('hashchange', () => {
        scrollToHash(window.location.hash.slice(1));
    });

    // Run after DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
