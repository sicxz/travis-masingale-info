// ===================================
// SMOOTH SCROLL NAVIGATION
// ===================================

document.addEventListener('DOMContentLoaded', () => {

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navHeight = document.querySelector('.main-nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update active state
                navLinks.forEach(l => l.removeAttribute('aria-current'));
                link.setAttribute('aria-current', 'page');
            }
        });
    });

    // ===================================
    // COLLAPSIBLE EXHIBITION SECTIONS
    // ===================================

    const categoryToggles = document.querySelectorAll('.category-toggle');

    categoryToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const targetId = toggle.getAttribute('aria-controls');
            const targetList = document.getElementById(targetId);
            const toggleIcon = toggle.querySelector('.toggle-icon');
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

            // Toggle the expanded state
            toggle.setAttribute('aria-expanded', !isExpanded);

            // Toggle the collapsed class
            if (isExpanded) {
                targetList.classList.add('collapsed');
                toggleIcon.textContent = '+';
            } else {
                targetList.classList.remove('collapsed');
                toggleIcon.textContent = '−';
            }
        });
    });

    // ===================================
    // KEYBOARD NAVIGATION ENHANCEMENT
    // ===================================

    // Add keyboard support for category toggles
    categoryToggles.forEach(toggle => {
        toggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle.click();
            }
        });
    });

    // ===================================
    // SCROLL SPY FOR ACTIVE NAVIGATION
    // ===================================

    const sections = document.querySelectorAll('.cv-section');
    const navHeight = document.querySelector('.main-nav').offsetHeight;

    const observerOptions = {
        root: null,
        rootMargin: `-${navHeight + 50}px 0px -80% 0px`,
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                const correspondingLink = document.querySelector(`.main-nav a[href="#${id}"]`);

                if (correspondingLink) {
                    navLinks.forEach(link => link.removeAttribute('aria-current'));
                    correspondingLink.setAttribute('aria-current', 'page');
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // ===================================
    // TERMINAL COMMAND INTERACTION
    // ===================================

    const terminalCommand = document.querySelector('.terminal-command');

    if (terminalCommand) {
        terminalCommand.addEventListener('click', () => {
            // Scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Make it keyboard accessible
        terminalCommand.setAttribute('tabindex', '0');
        terminalCommand.setAttribute('role', 'button');
        terminalCommand.setAttribute('aria-label', 'Scroll to top');

        terminalCommand.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    }

    // ===================================
    // PROGRESSIVE DISCLOSURE HINT
    // ===================================

    // Add a subtle visual hint for collapsed sections
    const collapsedLists = document.querySelectorAll('.exhibition-list.collapsed');

    collapsedLists.forEach(list => {
        const parentCategory = list.closest('.exhibition-category');
        if (parentCategory) {
            parentCategory.classList.add('has-collapsed-content');
        }
    });

    // ===================================
    // PRINT PREPARATION
    // ===================================

    window.addEventListener('beforeprint', () => {
        // Expand all sections before printing
        document.querySelectorAll('.exhibition-list.collapsed').forEach(list => {
            list.style.display = 'flex';
        });
    });

    window.addEventListener('afterprint', () => {
        // Restore collapsed state after printing
        document.querySelectorAll('.exhibition-list.collapsed').forEach(list => {
            list.style.display = '';
        });
    });

    // ===================================
    // ACCESSIBILITY: SKIP TO CONTENT
    // ===================================

    // Create a skip to content link for screen readers
    const skipLink = document.createElement('a');
    skipLink.href = '#teaching';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
    `;

    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '0';
    });

    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);

    // ===================================
    // PERFORMANCE: LAZY LOADING SECTIONS
    // ===================================

    // Add fade-in animation for sections as they come into view
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                fadeObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Only apply fade animation if user hasn't requested reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            fadeObserver.observe(section);
        });
    }

    console.log('Portfolio initialized successfully');
});
