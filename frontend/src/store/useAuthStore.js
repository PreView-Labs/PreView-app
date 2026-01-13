import { create } from 'zustand';

const useAuthStore = create((set) => ({
    user: null,
    isLoggedIn: false,

    // 로그인 처리 (Mock)
    login: (userData) => set({ user: userData, isLoggedIn: true }),

    // 로그아웃 처리
    logout: () => set({ user: null, isLoggedIn: false }),
}));

export default useAuthStore;