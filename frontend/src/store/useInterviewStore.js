import { create } from 'zustand';

const useInterviewStore = create((set) => ({
    interviewId: null,
    messages: [], // { id, sender: 'ai' | 'user', text }
    status: 'idle', // idle, in-progress, completed

    startInterview: (id) => set({ interviewId: id, messages: [], status: 'in-progress' }),

    addMessage: (message) => set((state) => ({
        messages: [...state.messages, message]
    })),

    endInterview: () => set({ status: 'completed' }),

    resetInterview: () => set({ interviewId: null, messages: [], status: 'idle' }),
}));

export default useInterviewStore;