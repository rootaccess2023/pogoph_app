import { create } from "zustand";

interface MenuStore {
  isOpen: boolean;
  setOpen: () => void;
  setClose: () => void;
  menuOpen: boolean;
  setMenuOpen: () => void;
}

export const useMenuStore = create<MenuStore>((set) => ({
  isOpen: false,
  setOpen: () => set({ isOpen: true }),
  setClose: () => set({ isOpen: false }),
  menuOpen: false,
  setMenuOpen: () => set({ menuOpen: true }),
}));
