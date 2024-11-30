import { create } from "zustand";

interface MenuStore {
  isOpen: boolean;
  toggleMenu: (isOpen: boolean) => void;
}

export const useMenuStore = create<MenuStore>((set) => ({
  isOpen: false,
  toggleMenu: (isOpen) => set({ isOpen: !isOpen }),
}));
