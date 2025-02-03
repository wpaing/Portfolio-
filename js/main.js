document.addEventListener('DOMContentLoaded', function() {
    // Terminal typing effect with 8-bit ASCII art
    const terminalLines = [
        '╔════════════════════════╗',
        '║    WIN PAING SOE      ║',
        '║    DevOps Engineer    ║',
        '╚════════════════════════╝',
        '',
        'whoami > Win Paing Soe',
        'pwd > /DevOps/Engineer',
        'ls -la skills/',
        '> [🐳] Docker, [☸️] Kubernetes',
        '> [🚀] AWS, [🔧] Terraform',
        '> [🐧] Linux, [🔄] CI/CD',
        'uptime > 4+ years experience',
        '',
        'status: ready for deployment 🚀'
    ];

    const terminal = document.createElement('div');
    terminal.className = 'terminal-container pixel-border';
    document.querySelector('.hero-content').prepend(terminal);

    // Add retro terminal header
    const terminalHeader = document.createElement('div');
    terminalHeader.className = 'terminal-header pixel-border';
    terminalHeader.innerHTML = `
        <div class="terminal-buttons">
            <span class="pixel-dot"></span>
            <span class="pixel-dot"></span>
            <span class="pixel-dot"></span>
        </div>
        <div class="terminal-title">win@devops:~$</div>
    `;
    terminal.appendChild(terminalHeader);

    const typeWriter = (element, text, speed = 50) => {
        let i = 0;
        return new Promise(resolve => {
            const type = () => {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    if (text.charAt(i) === ']') {
                        element.innerHTML += '<span class="blink">_</span>';
                    }
                    i++;
                    setTimeout(type, speed);
                } else {
                    resolve();
                }
            };
            type();
        });
    };

    const createTerminalLine = async (text) => {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        terminal.appendChild(line);
        await typeWriter(line, '$ ' + text);
    };

    // Execute terminal animation
    (async () => {
        for (const line of terminalLines) {
            await createTerminalLine(line);
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    })();

    // Existing smooth scrolling code
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Enhanced navbar scroll effect with blur
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 25, 47, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'rgba(10, 25, 47, 0.85)';
            navbar.style.backdropFilter = 'blur(5px)';
        }
    });

    // Add skill progress animation
    const skills = document.querySelectorAll('.skill-item');
    const observerOptions = {
        threshold: 0.5
    };

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('skill-animate');
            }
        });
    }, observerOptions);

    skills.forEach(skill => skillObserver.observe(skill));
    
    // Add pixel art skill icons
    const skillIcons = {
        'Docker': '🐳',
        'Kubernetes': '☸️',
        'AWS': '☁️',
        'Linux': '🐧',
        'Git': '📦',
        'CI/CD': '🔄'
    };

    // Add retro hover effects to skill items
    skills.forEach(skill => {
        skill.addEventListener('mouseover', () => {
            skill.classList.add('pixel-hover');
        });
        skill.addEventListener('mouseout', () => {
            skill.classList.remove('pixel-hover');
        });
    });
});
