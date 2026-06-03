(function() {
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('navLinks');
    if (toggle && nav) {
        toggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });    // 预点击效果：鼠标悬停改变背景色（CSS已做，此处可扩展点击波纹）
    const preClickItems = document.querySelectorAll('.pre-click');
    preClickItems.forEach(item => {
        item.addEventListener('mousedown', function(e) {
            let ripple = document.createElement('span');
            ripple.style.cssText = 'position:absolute;border-radius:50%;background:rgba(14,165,233,0.3);width:100px;height:100px;left:'+(e.clientX - e.currentTarget.getBoundingClientRect().left - 50)+'px;top:'+(e.clientY - e.currentTarget.getBoundingClientRect().top - 50)+'px;animation:ripple 0.6s linear;';
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
})();
