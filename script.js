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
    });    const fabBtn = document.getElementById('aiFabBtn');
    const chatWin = document.getElementById('aiChatWindow');
    if (fabBtn && chatWin) {
        fabBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            chatWin.style.display = chatWin.style.display === 'block' ? 'none' : 'block';
        });
        document.addEventListener('click', function(e) {
            if (!fabBtn.contains(e.target) && !chatWin.contains(e.target)) {
                chatWin.style.display = 'none';
            }
        });
    }

    const chatBody = document.getElementById('chatBody');
    const sendBtn = document.getElementById('sendChatBtn');
    const chatInput = document.getElementById('chatInput');
    if (sendBtn && chatInput && chatBody) {
        function addMessage(text, isUser = true) {
            const msg = document.createElement('p');
            msg.innerHTML = isUser ? '<strong>你：</strong> ' + text : '<strong>AI小安：</strong> ' + text;
            chatBody.appendChild(msg);
            chatBody.scrollTop = chatBody.scrollHeight;
        }
        sendBtn.addEventListener('click', function() {
            const msg = chatInput.value.trim();
            if (!msg) return;
            addMessage(msg, true);
            chatInput.value = '';
            setTimeout(function() {
                let reply = '感谢你的咨询。我们的平台支持网络纠纷在线调解，你可以通过“智能咨询”页面提交详情。';
                if (msg.includes('谣言')) reply = '网络谣言可通过平台“一键举报”功能提交，我们会进行多模态识别并预警。';
                addMessage(reply, false);
            }, 600);
        });
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') sendBtn.click();
        });
    }
})();
