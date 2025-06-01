# 个人简历网站项目

## 项目结构

```
├── index.html              # 主要网站文件（自包含，包含所有CSS和JS）
├── index-backup.html       # 备份版本（使用外部CSS/JS文件）
├── css/
│   └── style.css          # 外部CSS文件（仅备份版本使用）
├── js/
│   └── script.js          # 外部JavaScript文件（仅备份版本使用）
└── README.md              # 项目说明文档
```

## 文件说明

### 当前版本 (index.html)
- **自包含设计**：所有CSS和JavaScript都内联在HTML文件中
- **完全功能性**：包含所有功能（主题切换、响应式设计、平滑滚动等）
- **易于部署**：只需要一个HTML文件即可运行
- **优化完成**：已移除所有图片依赖，使用emoji图标

### 备份版本 (index-backup.html)
- **模块化设计**：使用外部CSS和JavaScript文件
- **便于维护**：CSS和JS分离，便于大型项目维护
- **功能相同**：与当前版本功能完全一致

## 技术特性

- ✅ 使用主题色 #456452
- ✅ 完整的暗色/亮色主题切换
- ✅ 响应式设计，支持移动设备
- ✅ 无图片依赖，全部使用emoji图标
- ✅ 现代CSS Grid和Flexbox布局
- ✅ 平滑滚动和交互动画
- ✅ 本地存储主题偏好

## 已清理的文件

- `debug.html` - 调试测试文件
- `index-fixed.html` - 临时修复文件
- `images/` - 图片文件夹（hero-bg.jpeg, profile.jpg, project1.jpeg, project2.jpg, project3.jpeg）

## 部署说明

### 简单部署
直接使用 `index.html` 文件，无需其他依赖。

### 模块化部署
如果需要使用模块化版本：
1. 使用 `index-backup.html` 作为主文件
2. 确保 `css/style.css` 和 `js/script.js` 文件存在
3. 将 `index-backup.html` 重命名为 `index.html`

## 本地开发

```bash
# 启动本地服务器
python3 -m http.server 8000

# 访问网站
http://localhost:8000
```

## 联系信息

- 姓名：徐紫阳
- 专业：湖北大学通信工程专业
- 邮箱：xuziyang@gmail.com
- 电话：13097476344
- 网站：xzy1.xyz
