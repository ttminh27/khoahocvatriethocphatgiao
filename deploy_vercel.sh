#!/usr/bin/env bash
set -e

# Xác định thư mục chứa script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Nếu script nằm ở thư mục root, chuyển vào thư mục webapp
if [ -d "$SCRIPT_DIR/webapp" ]; then
    WEBAPP_DIR="$SCRIPT_DIR/webapp"
else
    WEBAPP_DIR="$SCRIPT_DIR"
fi

echo "=========================================="
echo "🚀 Đang chuẩn bị deploy lên Vercel..."
echo "Thư mục làm việc: $WEBAPP_DIR"
echo "Project mục tiêu: phap-bao-hoc"
echo "=========================================="

cd "$WEBAPP_DIR"

# Kiểm tra node_modules
if [ ! -d "node_modules" ]; then
    echo "📦 Đang cài đặt thư viện (npm install)..."
    npm install
fi

# Kiểm tra build cục bộ trước khi deploy
echo "🔨 Đang kiểm tra bản build..."
npm run build

# Deploy lên Vercel production
echo "☁️  Đang tiến hành deploy lên Vercel production..."
npx vercel --prod --yes

echo "=========================================="
echo "✅ Deploy hoàn tất!"
echo "🌐 URL chính thức: https://phap-bao-hoc.vercel.app"
echo "=========================================="
