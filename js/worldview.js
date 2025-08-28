// 世界观切换
document.querySelectorAll('.worldview-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // 更新按钮状态
        document.querySelectorAll('.worldview-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // 切换内容
        const worldId = this.dataset.world;
        document.querySelectorAll('.worldview-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`${worldId}-world`).classList.add('active');
    });
});

// 搜索功能
document.querySelector('.search-btn')?.addEventListener('click', function() {
    const query = document.querySelector('.search-input').value.trim().toLowerCase();
    if (!query) return;
    
    const activeWorld = document.querySelector('.worldview-content.active');
    if (!activeWorld) return;
    
    // 临时高亮匹配内容
    const textNodes = [];
    const walker = document.createTreeWalker(
        activeWorld,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    let node;
    while (node = walker.nextNode()) {
        if (node.nodeValue.trim().length > 0) {
            textNodes.push(node);
        }
    }
    
    textNodes.forEach(textNode => {
        const content = textNode.nodeValue;
        if (content.toLowerCase().includes(query)) {
            const span = document.createElement('span');
            span.className = 'search-highlight';
            span.textContent = content;
            textNode.parentNode.replaceChild(span, textNode);
        }
    });
    
    // 3秒后移除高亮
    setTimeout(() => {
        document.querySelectorAll('.search-highlight').forEach(el => {
            const textNode = document.createTextNode(el.textContent);
            el.parentNode.replaceChild(textNode, el);
        });
    }, 3000);
});