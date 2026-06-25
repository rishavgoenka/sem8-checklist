// Immediately invoked theme manager to prevent FOUC (Flash of Unthemed Content)
(function () {
    const savedTheme = localStorage.getItem('sem8_checklist_theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
})();

// Helper to handle toggle interactions
window.themeManager = {
    toggle: function () {
        const isDark = document.documentElement.classList.contains('dark');
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('sem8_checklist_theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('sem8_checklist_theme', 'dark');
        }
        this.updateButtons();
    },
    
    updateButtons: function () {
        const isDark = document.documentElement.classList.contains('dark');
        const icons = document.querySelectorAll('.theme-toggle-icon');
        const labels = document.querySelectorAll('.theme-toggle-label');
        
        icons.forEach(icon => {
            if (isDark) {
                icon.className = 'ti ti-sun theme-toggle-icon';
            } else {
                icon.className = 'ti ti-moon theme-toggle-icon';
            }
        });

        labels.forEach(label => {
            label.textContent = isDark ? 'Light Mode' : 'Dark Mode';
        });
    }
};

// Sync button icons and rewrite links for local file system on load
window.addEventListener('DOMContentLoaded', () => {
    window.themeManager.updateButtons();

    // If running locally via file:// protocol, rewrite links to include index.html so it works without a web server
    if (window.location.protocol === 'file:') {
        document.querySelectorAll('a').forEach(a => {
            const href = a.getAttribute('href');
            if (href) {
                if (href.endsWith('/')) {
                    a.setAttribute('href', href + 'index.html');
                } else if (href === '../') {
                    a.setAttribute('href', '../index.html');
                }
            }
        });
    }
});
