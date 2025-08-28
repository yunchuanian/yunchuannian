// 对话数据
const dialogueData = {
    changan: {
        start: {
            message: "她沉默的拂去梦里的伤痕，眼中的情绪晦暗不明",
            character: "旁白",
            time: "21边缘年25边缘时",
            options: [
                { text: "你好，请问你是？", next: "scene1" },
                { text: "在你的眼里，这是怎样的故事呢？", next: "scene2" },
                { text: "这个故事，如何呢？", next: "scene3" }
            ]
        },
        scene1: {
            message: "我是造梦者，你邀请我来的，忘了吗？",
            character: "珣",
            time: "21边缘年25边缘时",
            options: [
                { text: "啊，是你，我想起来了。", next: "end1" },
                { text: "对不起，我的确没有任何印象。", next: "end2" }
            ]
        },
        scene2: {
            message: "想听我的回答？",
            character: "珣",
            time: "21边缘年25边缘时",
            options: [
                { text: "不想，我只是问问。", next: "end3" },
                { text: "想。", next: "scene4" }
            ]
        },
        scene3: {
            message: "温柔，但是伤痕累累，或许是你太累了，这些梦境的刀尖都是对着你。",
            character: "珣",
            time: "21边缘年25边缘时",
            options: [
                { text: "啊，竟是如此吗。", next: "end1" },
                { text: "那你是如何到这里的", next: "scene4" }
            ]
        },
	   scene4: {
            message: "意识不到吗，罢了。就当这是一场幻梦吧",
            character: "珣",
            time: "21边缘年25边缘时",
            options: [
                { text: "诶？", next: "end4" },
                { text: "是指在做梦吗？", next: "end3" }
            ]
        },
        end1: {
            message: "她继续为你清扫梦境的伤痕，待你醒来，世界都会变得温柔",
            character: "旁白",
            time: "21边缘年25边缘时",
            options: []
        },
        end2: {
            message: "你突然苏醒，看着眼前的人，她正是你在梦里看到的造梦者",
            character: "旁白",
            time: "21边缘年25边缘时",
            options: []
        },
	
		end3: {
            message: "她温柔的注视着你，待到你从梦中醒来，已经回到了自己的家里",
            character: "旁白",
            time: "21边缘年25边缘时",
            options: []
        },
		end4: {
            message: "只是梦罢了，你知道的吧。",
            character: "旁白",
            time: "21边缘年25边缘时",
            options: []
        },
		
    },
    dream: {
        start: {
            message: "请问发生什么事情了",
            character: "亓霁",
            time: "8：20：23",
            options: [
                { text: "亓校，您怎么来了？", next: "scene1" },
                { text: "小颜刚刚用漂浮系的时候又伤到人了", next: "end1" },
                { text: "我不知道，我纯凑热闹的", next: "scene2" }
            ]
        },
        scene1: {
            message: "有人出事，我当然会来（其实是刚好路过看小颜）",
            character: "亓霁",
            time: "8：21：21",
            options: [
                { text: "是这样的，小颜在漂浮自己的时候不小心伤到别人了", next: "end1" },
                { text: "这样吗？其实我也不太知道怎么回事", next: "scene2" }
            ]
        },
        scene2: {
            message: "不知道啊，那行，我去看看",
            character: "珣",
            time: "梦境时间",
            options: [
                { text: "好的，亓校", next: "end2" },
                { text: "亓校你看那边有人找你", next: "end3" }
            ]
	
        },
		 end1: {
            message: "亓霁飞快的跑入人群之中，带着伤员和颜愈君去了医院",
            character: "旁白",
            time: "8：30：23",
            options: []
        },
		end2: {
            message: "亓霁从人群中穿了过去，看见被颜愈君误伤的同学",
            character: "旁白",
            time: "8：30：23",
            options: []
        },
		end3: {
            message: "亓霁结束了围观，跟着元局长回去了",
            character: "旁白",
            time: "8：30：23",
            options: []
        }
		
    },
    midnight: {
        start: {
            message: "您也是来找我预约派对策划的吗",
            character: "Mania",
            time: "20:45:12",
            options: [
                { text: "是的，夜小姐", next: "scene1" },
                { text: "不，夜小姐，派对的事情我们先不着急", next: "scene2" },
                { text: "哦，夜小姐，您果然如社交媒体上一样美丽", next: "scene3" }
            ]
        },
        scene1: {
            message: "向我描述您想要的氛围吧，亲爱的。",
            character: "Mania",
            time: "20:47:30",
            options: [
                { text: "盛大，绚丽，让人陶醉。我知道，夜小姐最会做这种派对了", next: "end1" },
                { text: "小型的，只属于家人朋友的小派对", next: "end2" }
            ]
        },
        scene2: {
            message: "哦？那您来是为了什么呢？",
            character: "菱",
            time: "20:48:45",
            options: [
                { text: "是为了邀请您去参加派对的", next: "end3" },
                { text: "是为了多看您两眼", next: "end4" }
            ]
        },
		 scene3: {
            message: "Mania满脸笑意，只是看着你，就让你感到幸福",
            character: "菱",
            time: "20:48:45",
            options: [
                { text: "哦，美丽的夜小姐，有机会能够邀请您去我的派对吗？", next: "end3" },
                { text: "哦，美丽的夜小姐。", next: "end4" }
            ]
        },
		 end1: {
            message: "Mania笑着递给了你一个华丽的策划案，你看过后很满意",
            character: "旁白",
            time: "20：50：23",
            options: []
        },
		 end2: {
            message: "Mania给了你一个精致的策划案，你看完表示满意",
            character: "旁白",
            time: "20：50：23",
            options: []
        },
		 end3: {
            message: "“我的荣幸。”Mania兴奋的接过你给的邀请函",
            character: "旁白",
            time: "20：50：23",
            options: []
        },
		 end4: {
            message: "Mania叫来管家把你请了出去",
            character: "旁白",
            time: "20：50：23",
            options: []
        },
    }
};

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 剧场切换
    const theaterBtns = document.querySelectorAll('.theater-btn');
    theaterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 更新按钮状态
            theaterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 加载对应剧场
            const theaterId = this.dataset.theater;
            loadTheater(theaterId);
        });
    });
    
    // 默认加载第一个剧场
    loadTheater('changan');
});

// 加载剧场
function loadTheater(theaterId) {
    const theater = dialogueData[theaterId];
    if (!theater) return;
    
    // 保存当前剧场
    localStorage.setItem('currentTheater', theaterId);
    updateURL(theaterId);
    
    // 从上次进度或从头开始
    const lastScene = localStorage.getItem(`lastScene_${theaterId}`) || 'start';
    renderScene(theaterId, lastScene);
}

// 渲染场景
function renderScene(theaterId, sceneId) {
    const theater = dialogueData[theaterId];
    if (!theater) return;
    
    const scene = theater[sceneId];
    if (!scene) return;
    
    // 保存当前场景
    localStorage.setItem(`lastScene_${theaterId}`, sceneId);
    
    const container = document.getElementById('theaterContainer');
    container.innerHTML = '';
    
    // 创建剧场容器
    const theaterDiv = document.createElement('div');
    theaterDiv.className = 'theater-container';
    theaterDiv.id = `${theaterId}-theater`;
    
    // 创建剧场标题
    const headerDiv = document.createElement('div');
    headerDiv.className = 'theater-header';
    
    let title = '';
    let subtitle = '';
    
    switch(theaterId) {
        case 'changan':
            title = '《造梦者》角色互动';
            subtitle = '与珣的梦境对话';
            break;
        case 'dream':
            title = '《2337》角色互动';
            subtitle = '与亓霁的意外互动';
            break;
        case 'midnight':
            title = '《Ariadne Bai》角色互动';
            subtitle = '与Mania的派对策划预约';
            break;
    }
    
    headerDiv.innerHTML = `
        <h2>${title}</h2>
        <p>${subtitle}</p >
    `;
    theaterDiv.appendChild(headerDiv);
    
    // 创建对话场景
    const sceneDiv = document.createElement('div');
    sceneDiv.className = 'dialogue-scene';
    
    // 创建消息元素
    const messageDiv = document.createElement('div');
    messageDiv.className = 'dialogue-message';
    messageDiv.innerHTML = `
        <div class="character-avatar">${scene.character}</div>
        <div class="message-content">
            <div class="message-bubble">
                <p class="message-text">${scene.message}</p >
            </div>
            <div class="message-time">${scene.time}</div>
        </div>
    `;
    sceneDiv.appendChild(messageDiv);
    
    // 创建选项
    if (scene.options.length > 0) {
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'dialogue-options';
        
        scene.options.forEach(option => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option-item';
            optionDiv.dataset.next = option.next;
            optionDiv.innerHTML = `
                <p class="option-text">${option.text}</p >
            `;
            optionDiv.addEventListener('click', function() {
                renderScene(theaterId, this.dataset.next);
            });
            optionsDiv.appendChild(optionDiv);
        });
        
        sceneDiv.appendChild(optionsDiv);
    }
    
    // 创建控制按钮
    const controlsDiv = document.createElement('div');
    controlsDiv.className = 'dialogue-controls';
    controlsDiv.innerHTML = `
        <button class="control-btn restart-btn">重新开始</button>
        <button class="control-btn save-btn">保存进度</button>
    `;
    
    controlsDiv.querySelector('.restart-btn').addEventListener('click', function() {
        if (confirm('确定要重新开始吗？当前进度将会丢失。')) {
            renderScene(theaterId, 'start');
        }
    });
    
    controlsDiv.querySelector('.save-btn').addEventListener('click', function() {
        localStorage.setItem(`lastScene_${theaterId}`, sceneId);
        alert('进度已保存！');
    });
    
    sceneDiv.appendChild(controlsDiv);
    theaterDiv.appendChild(sceneDiv);
    container.appendChild(theaterDiv);
}

// 更新URL
function updateURL(theaterId) {
    const url = new URL(window.location.href);
    url.searchParams.set('theater', theaterId);
    window.history.pushState({}, '', url);
}