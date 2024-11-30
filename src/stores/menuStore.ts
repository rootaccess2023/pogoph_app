import { create } from "zustand";

interface MenuStore {
  isOpen: boolean;
  setOpen: () => void;
  setClose: () => void;
}

export const useMenuStore = create<MenuStore>((set) => ({
  isOpen: false,
  setOpen: () => set({ isOpen: true }),
  setClose: () => set({ isOpen: false }),
}));
