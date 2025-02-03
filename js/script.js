document.addEventListener('DOMContentLoaded', () => {
    // Smooth reveal animations for sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // Enhanced parallax effect with tilt
    const heroContent = document.querySelector('.hero-content');
    heroContent.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = heroContent.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        heroContent.style.transform = `perspective(1000px) rotateX(${(y - 0.5) * 10}deg) rotateY(${(x - 0.5) * 10}deg)`;
    });

    heroContent.addEventListener('mouseleave', () => {
        heroContent.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });

    // Skill cards hover effect
    document.querySelectorAll('.skill-category').forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            const { left, top } = card.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;

            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });

    // Animated text typing effect
    const titles = document.querySelectorAll('.section-title');
    titles.forEach(title => {
        const text = title.textContent;
        title.textContent = '';
        let index = 0;

        function typeText() {
            if (index < text.length) {
                title.textContent += text.charAt(index);
                index++;
                setTimeout(typeText, 100);
            }
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeText();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(title);
    });

    // Timeline animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.setProperty('--delay', `${index * 0.2}s`);
    });

    // Contact icons pulse effect
    document.querySelectorAll('.contact-item i').forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.classList.add('pulse');
        });

        icon.addEventListener('animationend', () => {
            icon.classList.remove('pulse');
        });
    });

    // Animated counter for experience years
    const animateCounter = (element, target) => {
        let current = 0;
        const increment = target > 30 ? 2 : 1;
        const interval = setInterval(() => {
            if (current >= target) {
                clearInterval(interval);
                return;
            }
            current += increment;
            element.textContent = current;
        }, 100);
    };

    // Skills progress animation
    document.querySelectorAll('.skill-category').forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            skill.classList.add('active');
        });
    });

    // Smooth navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // CV Download Modal functionality
    const modal = document.getElementById('cvModal');
    const downloadBtn = document.querySelector('.btn.secondary');
    const closeBtn = document.querySelector('.modal-close');
    const downloadForm = document.getElementById('downloadForm');

    if (downloadBtn && modal && closeBtn && downloadForm) {
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });

        downloadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const cvPath = 'assets/WinPaingSoe-CV.pdf';
            const link = document.createElement('a');
            link.href = cvPath;
            link.download = 'WinPaingSoe-CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            modal.classList.remove('active');
            downloadForm.reset();
        });
    }

    // Cursor effect
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('click', () => {
        cursor.classList.add('expand');
        setTimeout(() => {
            cursor.classList.remove('expand');
        }, 500);
    });

    // Enhanced cursor effect
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    document.body.appendChild(cursorDot);

    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    // Hover effect for buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = button.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;

            button.style.setProperty('--x', `${x * 100}%`);
            button.style.setProperty('--y', `${y * 100}%`);
        });
    });

    // Scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.classList.add('scroll-progress');
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = `${progress}%`;
    });
});