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

    // 滚动入场动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-up');
            }
        });
    }, { threshold: 0.2 });
    document.querySelectorAll('.glass-panel, .feature-card, .team-card, .plan-node').forEach(el => observer.observe(el));
})();