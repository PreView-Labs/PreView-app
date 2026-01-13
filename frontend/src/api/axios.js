import axios from 'axios';

const api = axios.create({
    baseURL: '/api', // Vite 프록시 설정 사용 시
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // 쿠키(JWT Refresh Token) 전송을 위해 필수
});

// 요청 인터셉터 (Access Token 헤더 추가 등)
api.interceptors.request.use((config) => {
    // const token = localStorage.getItem('accessToken');
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default api;