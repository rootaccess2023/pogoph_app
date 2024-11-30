import { create } from "zustand";

interface MenuStore {
  isOpen: boolean;
}

export const useMenuStore = create<MenuStore>(() => ({
  isOpen: true,
}));
