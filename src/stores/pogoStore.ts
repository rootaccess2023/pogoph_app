import { create } from "zustand";

interface Pogo {
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
  setYear: (year: number) => void;
  setPogo: (pogo: Pogo[]) => void;
}

export const usePogoStore = create<PogoStore>((set) => ({
  year: 2017,
  pogo: [],
  setYear: (year: number) => set({ year: year }),
  setPogo: (data: Pogo[]) => set({ pogo: data }),
}));
