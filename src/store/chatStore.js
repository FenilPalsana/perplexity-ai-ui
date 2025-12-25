import { create } from "zustand";

export const useChatStore = create((set) => ({
  messages: [],
  loading: false,

  sendMessage: (text) => {
    set((state) => ({
      messages: [...state.messages, { sender: "user", text }],
      loading: true,
    }));

    setTimeout(() => {
      set((state) => ({
        messages: [
          ...state.messages,
          {
            sender: "ai",
            text: "This is a sample AI answer for testing.",
          },
        ],
        loading: false,
      }));
    }, 1500);
  },
}));
