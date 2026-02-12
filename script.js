// ========== script.js ==========
// Unique interactive effects for Abhinav Varma portfolio

(function() {
    "use strict";

    // ----- 1. TYPED SUBTITLE ROTATOR (highlights your domain) -----
    const subElement = document.querySelector('.typed-sub .highlight');
    if (subElement) {
        const roles = [
            'Information Technology',
            'Deep Learning',
            'Computer Vision',
            'Flask Dev',
            'AI Engineer'
        ];
        let index = 0;
        setInterval(() => {
            index = (index + 1) % roles.length;
            subElement.textContent = roles[index];
        }, 2000);
    }

    // ----- 2. AI CHIP INTERACTIVE GLOW (hover effect with smooth pulse) -----
    const aiChip = document.querySelector('.ai-chip');
    if (aiChip) {
        aiChip.addEventListener('mouseenter', () => {
            aiChip.style.borderColor = '#2af5c2';
            aiChip.style.boxShadow = '0 0 30px rgba(42,245,194,0.4)';
        });
        aiChip.addEventListener('mouseleave', () => {
            aiChip.style.borderColor = 'rgba(60, 106, 255, 0.5)';
            aiChip.style.boxShadow = '0 20px 35px -10px black';
        });
    }

    // ----- 3. DYNAMIC YEAR IN FOOTER (optional, sets current year) -----
    const copyrightEl = document.querySelector('.copyright');
    if (copyrightEl) {
        const currentYear = new Date().getFullYear();
        // keep original text but update year (if it says 2026, replace or append)
        if (copyrightEl.innerHTML.includes('2026')) {
            copyrightEl.innerHTML = copyrightEl.innerHTML.replace('2026', currentYear);
        } else {
            // if not, append
            copyrightEl.innerHTML += ` · ${currentYear}`;
        }
    }

    // ----- 4. SMOOTH SCROLL FOR "SPOTLIGHT PROJECT" BUTTON (internal anchor) -----
    const spotlightBtn = document.querySelector('a.btn-primary[href="#project"]');
    if (spotlightBtn) {
        spotlightBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector('#project');
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });
    }

    // ----- 5. CONSOLE WELCOME (small easter egg) -----
    console.log(
        '%c⚡ Abhinav Varma Portfolio | AI · Deep Learning · Computer Vision',
        'background: #0b0c1a; color: #2af5c2; font-size: 12px; padding: 6px; border-radius: 8px; font-family: monospace;'
    );

})();