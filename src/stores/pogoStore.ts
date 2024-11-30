import { create } from "zustand";

export interface Pogo {
  name?: string;
  latitude: number;
  longitude: number;
  description?: string;
  image?: string;
  address?: string;
  region?: string;
  years?: { [key: string]: boolean };
}

interface PogoStore {
  year: number;
  pogo: Pogo[];
  filteredPogo: Pogo[];
  selectedPogo: Pogo | null;
  setYear: (year: number) => void;
  setPogo: (pogo: Pogo[]) => void;
  setFilteredPogo: (pogo: Pogo[]) => void;
  setSelectedPogo: (pogo: Pogo | null) => void;
}

export const usePogoStore = create<PogoStore>((set) => ({
  year: 2017,
  pogo: [],
  filteredPogo: [],
  selectedPogo: null,
  setYear: (year: number) => set({ year: year }),
  setPogo: (data: Pogo[]) => set({ pogo: data }),
  setFilteredPogo: (data: Pogo[]) => set({ filteredPogo: data }),
  setSelectedPogo: (pogo: Pogo | null) => set({ selectedPogo: pogo }),
}));
