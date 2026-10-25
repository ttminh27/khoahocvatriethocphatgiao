#!/usr/bin/env bash
set -e

# Xác định thư mục chứa script (hỗ trợ gọi từ thư mục root hoặc webapp)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [ -d "$SCRIPT_DIR/webapp" ]; then
    WEBAPP_DIR="$SCRIPT_DIR/webapp"
else
    WEBAPP_DIR="$SCRIPT_DIR"
fi

cd "$WEBAPP_DIR"

PORT="${PORT:-3000}"
HOST="${HOST:-0.0.0.0}"

# Kiểm tra node_modules
if [ ! -d "node_modules" ]; then
    echo "📦 Đang cài đặt thư viện (npm install)..."
    npm install
fi

# Chế độ xem trước bản build production nếu truyền tham số 'preview'
if [ "$1" = "preview" ]; then
    shift
    if [ ! -d "dist" ]; then
        echo "🔨 Chưa có thư mục dist, đang build..."
        npm run build
    fi
    echo "=========================================="
    echo "🚀 Đang preview bản build tại cổng $PORT..."
    echo "🌐 URL: http://localhost:$PORT"
    echo "=========================================="
    exec npm run preview -- --port "$PORT" --host "$HOST" "$@"
fi

echo "=========================================="
echo "🚀 Đang khởi chạy dev server tại cổng $PORT..."
echo "Thư mục làm việc: $WEBAPP_DIR"
echo "🌐 URL: http://localhost:$PORT"
echo "=========================================="

exec npm run dev -- --port "$PORT" --host "$HOST" "$@"
