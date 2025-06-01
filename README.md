# 个人网站项目 - 徐紫阳

## 🎯 项目概述

这是一个现代化的个人简历网站，采用响应式设计，支持深色/浅色主题切换，并为移动设备优化了用户体验。

## ✨ 主要特性

### 🎨 设计特色
- **主题色彩**：采用 `#456452` 作为主色调，营造专业、现代的视觉效果
- **深色/浅色模式**：支持主题切换，使用localStorage保存用户偏好
- **响应式设计**：完美适配桌面、平板和移动设备
- **无图片设计**：使用emoji图标和CSS样式，确保快速加载

### 📱 移动端优化
- **汉堡菜单**：移动设备上提供优雅的侧滑导航菜单
- **触摸友好**：优化按钮大小和交互体验
- **防止滚动穿透**：菜单打开时禁止背景滚动
- **多种关闭方式**：支持点击遮罩、ESC键、窗口缩放自动关闭

### 🚀 用户体验
- **平滑滚动**：页面内锚点导航使用smooth scrolling
- **动画效果**：悬停动画、过渡效果提升交互体验
- **导航高亮**：滚动时自动高亮当前章节
- **快速加载**：单文件结构，内联CSS/JS，无外部依赖

## 📁 项目结构

```
/workspaces/1010163.xyz/
├── public/
│   ├── index.html          # 主网站文件（自包含）
│   └── favicon.svg         # 网站图标
├── workers-site/
│   └── index.js           # Cloudflare Workers配置
├── package.json           # 项目配置和脚本
├── wrangler.toml         # Cloudflare Workers配置
├── _redirects            # Cloudflare Pages重定向规则
└── README.md             # 项目文档
```

## 🛠 技术栈

- **HTML5**：语义化标签，无障碍设计
- **CSS3**：CSS Variables、Grid、Flexbox、动画
- **JavaScript (ES6+)**：模块化代码，现代语法
- **Cloudflare Pages**：静态网站托管
- **Cloudflare Workers**：边缘计算优化

## 🎯 网站内容

### 个人信息
- **姓名**：徐紫阳
- **专业**：湖北大学通信工程专业
- **联系方式**：手机、邮箱、个人网站

### 主要章节
1. **首页**：个人介绍和联系信息
2. **关于我**：详细个人背景和特长
3. **项目经历**：技术项目展示
4. **教育背景**：学习经历时间线
5. **技能**：技术能力展示
6. **联系方式**：详细联系信息

## 🚀 本地开发

### 启动开发服务器
```bash
# 使用npm脚本
npm run dev

# 或直接使用Python
python3 -m http.server 8000 --directory public
```

访问 `http://localhost:8000` 查看网站

### 项目脚本
```bash
npm run dev     # 启动开发服务器
npm run start   # 启动生产服务器
npm run deploy  # 部署到Cloudflare Pages
```

## 🌐 部署说明

### Cloudflare Pages自动部署
1. 连接GitHub仓库到Cloudflare Pages
2. 设置构建目录为 `public`
3. 推送代码自动触发部署

### 手动部署
```bash
# 使用Wrangler CLI
npm run deploy
```

## 📱 响应式断点

- **桌面端**：> 768px
- **平板端**：481px - 768px  
- **移动端**：≤ 480px

## 🎨 主题系统

### CSS变量
```css
:root {
  --primary-color: #456452;    /* 主色调 */
  --primary-light: #5a7a66;   /* 浅色变体 */
  --primary-dark: #344439;    /* 深色变体 */
  --bg-color: #ffffff;        /* 背景色 */
  --text-color: #333333;      /* 文字色 */
  --card-bg: #f8f9fa;        /* 卡片背景 */
}
```

### 深色模式
通过 `data-theme="dark"` 属性切换深色主题，所有颜色值自动适应。

## 🔧 浏览器支持

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个项目。

---

**访问网站**：[https://1010163.xyz](https://1010163.xyz)

**最后更新**：2025年6月1日
