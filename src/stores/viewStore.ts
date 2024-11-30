import { create } from "zustand";

interface ViewState {
  zoom: number;
  pitch: number;
}

export const useViewStore = create<ViewState>(() => ({
  zoom: 5,
  pitch: 0,
}));
