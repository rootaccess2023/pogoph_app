import { create } from "zustand";

interface MenuStore {
  isOpen: boolean;
  setOpen: () => void;
  setClose: () => void;
  menuOpen: boolean;
  sideOpen: boolean;
  setMenuOpen: () => void;
  setMenuClose: () => void;
  setSideOpen: () => void;
  setSideClose: () => void;
}

export const useMenuStore = create<MenuStore>((set) => ({
  isOpen: false,
  setOpen: () => set({ isOpen: true }),
  setClose: () => set({ isOpen: false }),
  menuOpen: false,
  sideOpen: false,
  setMenuOpen: () => set({ menuOpen: true }),
  setMenuClose: () => set({ menuOpen: false }),
  setSideOpen: () => set({ sideOpen: true }),
  setSideClose: () => set({ sideOpen: false }),
}));
