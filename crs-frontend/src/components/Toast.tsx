import { useEffect } from 'react';
interface ToastProps {
    message: string;
    type: 'success' | 'error'; // Phân biệt kiểu thông báo thành công (xanh) hoặc lỗi (đỏ)
    onClose: () => void;       // Hàm xử lý đóng thông báo
}

export default function Toast({ message, type, onClose }: ToastProps) {
    useEffect(() => {
        // Tự động gọi hàm onClose sau 3.5 giây để tắt thông báo
        const timer = setTimeout(onClose, 3500);

        // Cleanup timer nếu component bị unmount trước khi hết 3.5 giây
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div
            style={{
                position: 'fixed',
                bottom: 24,
                right: 24,
                padding: '12px 20px',
                borderRadius: 8,
                color: '#fff',
                backgroundColor: type === 'success' ? '#15803d' : '#b91c1c', // Xanh lá nếu success, đỏ nếu error
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '14px',
            }}
        >
            <span>{message}</span>
            <button
                onClick={onClose}
                style={{
                    background: 'none',
                    border: 'none',
                    color: '#fff',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    padding: 0,
                    lineHeight: 1,
                }}
                title="Đóng"
            >
                ✕
            </button>
        </div>
    );
}