(function() {
    // 移动端菜单
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('navLinks');
    if (toggle && nav) {
        toggle.addEventListener('click', () => nav.classList.toggle('active'));
    }
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => nav.classList.remove('active'));
    });

    // 视差滚动效果
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.querySelectorAll('.frame-section').forEach(section => {
            const speed = section.dataset.speed || 0.5;
            section.style.backgroundPositionY = -(scrolled * speed) + 'px';
        });
    });

    // 入场动画观察器
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.glass-card, .team-member, .timeline-item').forEach(el => {
        el.style.animation = 'fadeInUp 0.8s ease-out forwards';
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
})();