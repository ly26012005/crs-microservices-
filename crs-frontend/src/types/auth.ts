export interface LoginRequest {
    username: string;
    password?: string;
}

export interface LoginResponse {
    userId: number; // Bổ sung userId trả về từ backend
    token: string;
    username: string;
    role: 'ADMIN' | 'STUDENT';
}