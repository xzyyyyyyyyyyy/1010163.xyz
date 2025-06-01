#!/bin/bash

echo "🚀 部署个人简历网站到 Cloudflare Pages"
echo "=================================="

# 检查是否已登录
if ! wrangler auth whoami > /dev/null 2>&1; then
    echo "❌ 尚未登录 Cloudflare"
    echo "请先运行: wrangler auth login"
    exit 1
fi

echo "✅ 已登录 Cloudflare"

# 部署到 Pages（使用正确的命令）
echo "📤 开始部署..."
wrangler pages deploy . --project-name=personal-resume

echo "🎉 部署完成！"
