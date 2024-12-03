import { create } from "zustand";

interface MenuStore {
  isOpen: boolean;
  setOpen: () => void;
  setClose: () => void;
  menuOpen: boolean;
  sideOpen: boolean;
  timelineOpen: boolean;
  setMenuOpen: () => void;
  setMenuClose: () => void;
  setSideOpen: () => void;
  setSideClose: () => void;
  toggleTimelineOpen: () => void;
}

export const useMenuStore = create<MenuStore>((set) => ({
  isOpen: false,
  setOpen: () => set({ isOpen: true }),
  setClose: () => set({ isOpen: false }),
  menuOpen: false,
  sideOpen: false,
  timelineOpen: false,
  setMenuOpen: () => set({ menuOpen: true }),
  setMenuClose: () => set({ menuOpen: false }),
  setSideOpen: () => set({ sideOpen: true }),
  setSideClose: () => set({ sideOpen: false }),
  toggleTimelineOpen: () =>
    set((state) => ({ timelineOpen: !state.timelineOpen })),
}));
