document.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await fetch('data/worldview-data.json');
        const data = await response.json();
        renderWorldviews(data.worldviews);
    } catch (error) {
        console.error('加载世界观数据失败:', error);
    }
});

function renderWorldviews(worldviews) {
    const container = document.getElementById('worldviewContainer');
    container.innerHTML = '';
    
    worldviews.forEach(world => {
        const section = document.createElement('section');
        section.className = 'worldview-section';
        section.innerHTML = `
            <div class="worldview-header">
                <h2>《${world.title}》</h2>
                < img src="${world.cover}" alt="${world.title}" class="worldview-cover">
            </div>
            <p class="worldview-desc">${world.description}</p >
            <h3>主要势力</h3>
            <ul class="faction-list">
                ${world.factions.map(f => `
                    <li>
                        <strong>${f.name}</strong>: ${f.desc}
                    </li>
                `).join('')}
            </ul>
        `;
        container.appendChild(section);
    });
}
// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 世界观切换
    const worldviewBtns = document.querySelectorAll('.worldview-btn');
    worldviewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 更新按钮状态
            worldviewBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 切换内容
            const worldviewId = this.dataset.worldview;
            document.querySelectorAll('.worldview-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(`${worldviewId}-content`).classList.add('active');
        });
    });
});