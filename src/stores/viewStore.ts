import { create } from "zustand";

interface ViewState {
  zoom: number;
  pitch: number;
  setZoom: (zoom: number) => void;
  setPitch: (pitch: number) => void;
}

export const useViewStore = create<ViewState>((set) => ({
  zoom: 5,
  pitch: 0,
  setZoom: (zoom) => set({ zoom: zoom }),
  setPitch: (pitch) => set({ pitch: pitch }),
}));
