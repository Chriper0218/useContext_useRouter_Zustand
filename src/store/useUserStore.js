import { create } from 'zustand';

export const useUserStore = create((set) => ({
  user: "Christian",
  
  setUser: (newName) => set({ user: newName }),
  
  logout: () => set({ user: null })
}));