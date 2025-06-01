document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('.scroll-section');
    const heroSection = document.getElementById('hero');

    // 导航栏背景变化
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // 检查哪些区域进入视口
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                section.classList.add('visible');
                currentSectionId = section.getAttribute('id');
            }
        });

        // 更新导航栏激活状态 (可选)
        const navLinks = navbar.querySelectorAll('ul li a');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSectionId) {
                link.classList.add('active');
            }
            // 特殊处理 hero 区域的导航链接
            if (currentSectionId === '' && window.scrollY < heroSection.offsetHeight / 2 && link.getAttribute('href') === '#hero'){
                 link.classList.add('active');
            }
        });
    });

    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 初始检查一次，确保首屏动画和内容可见性
    // (如果某些元素依赖于滚动触发，但初始就在视口内)
    function initialCheck() {
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // 调整判断条件，使得页面加载时，视口内的 section 也能触发动画
            if (window.scrollY + window.innerHeight >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                section.classList.add('visible');
            }
        });
        // 确保导航栏在顶部时没有 scrolled 类
        if (window.scrollY <= 50) {
            navbar.classList.remove('scrolled');
        }
        // 激活首页导航
        const homeLink = navbar.querySelector('a[href="#hero"]');
        if (homeLink && pageYOffset < heroSection.offsetHeight / 2) {
            homeLink.classList.add('active');
        }
    }
    initialCheck(); // 页面加载时执行一次检查

    // 为时间轴项目添加延迟，确保动画按顺序播放
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        const content = item.querySelector('.timeline-content');
        // CSS伪元素不能直接通过JS选择和修改动画延迟，动画延迟已在CSS中通过 :nth-child 实现
        if(content){
            // content.style.animationDelay = `${0.5 + index * 0.3}s`;
            // item.style.animationDelay = `${0.5 + index * 0.3}s`; // 如果item本身也有动画
        }
    });

    // 添加滚动到顶部的按钮 (可选)
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '&uarr;'; // 上箭头
    scrollToTopBtn.id = 'scrollToTopBtn';
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) { // 滚动超过300px时显示按钮
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // 为英雄区域添加一个向下滚动提示 (可选)
    const heroContainer = document.getElementById('hero').querySelector('.container');
    if (heroContainer) {
        const scrollIndicator = document.createElement('div');
        scrollIndicator.classList.add('scroll-down-indicator');
        scrollIndicator.innerHTML = '<a href="#about">&darr;</a>'; // 下箭头链接到“关于我”区域
        heroContainer.appendChild(scrollIndicator);
    }

});

// 为CSS中的滚动到顶部按钮添加样式
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
#scrollToTopBtn {
    display: none; /* 默认隐藏 */
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    font-size: 18px;
    border: none;
    outline: none;
    background-color: #ff6347;
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 50%;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    transition: background-color 0.3s ease, opacity 0.3s ease;
}

#scrollToTopBtn:hover {
    background-color: #e5533d;
}

/* 导航栏激活链接样式 */
#navbar ul li a.active {
    color: #ff6347; /* 高亮颜色 */
    font-weight: bold;
}
`;
document.head.appendChild(styleSheet);
