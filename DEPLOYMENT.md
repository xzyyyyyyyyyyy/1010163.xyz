# Cloudflare Pages 部署指南

## 🚀 推荐的简单部署方法

### 方法1：Dashboard 直接上传（最简单）

1. 访问 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 登录你的账户 (xuziyang81@gmail.com)
3. 点击左侧菜单的 "Pages"
4. 点击 "Create a project"
5. 选择 "Upload assets"
6. 上传 `index.html` 文件
7. 项目名称: `personal-resume` 或 `1010163-xyz`
8. 点击 "Deploy site"

### 方法2：通过 Git 连接

1. 将代码推送到 GitHub 
2. 在 Cloudflare Pages 中连接 GitHub 仓库
3. 构建设置:
   - Build command: 留空
   - Build output directory: `/`
   - Root directory: `/`

### 方法3：修复 API Token 权限

如果要继续使用命令行部署，请：

1. 到 Cloudflare Dashboard → My Profile → API Tokens
2. 创建新的 Custom Token
3. 权限设置:
   - `Cloudflare Pages:Edit`
   - `Account:Read`
   - `Zone:Read` (如果使用自定义域名)
4. 更新环境变量:
   ```bash
   export CLOUDFLARE_API_TOKEN="your_new_token_here"
   ```

## 📁 需要上传的文件

只需要上传 `index.html` 文件，因为它是自包含的。

可选文件:
- `_redirects` (用于路由规则)

## 🌐 预期结果

部署成功后，你会得到一个类似这样的 URL:
- https://1010163.pages.dev
- 或自定义域名

## 🔧 故障排除

如果遇到问题:
1. 确保 `index.html` 文件完整且有效
2. 检查文件大小 < 25MB
3. 确保没有敏感信息在代码中
