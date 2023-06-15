import { create } from "zustand";

export const usePlanetDataStorage = create((set) => ({
  dataP: [],
  setDataPlanet: (value) =>
    set((state) => ({
      dataP: value,
    })),
}));
