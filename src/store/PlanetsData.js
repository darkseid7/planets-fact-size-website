import { create } from "zustand";

export const usePlanetDataStorage = create((set) => ({
  dataP: [],
  executeAnimation: true,
  setDataPlanet: (value) =>
    set(() => ({
      dataP: value,
      executeAnimation: true,
    })),
  setExecuteAnimation: () =>
    set(() => ({
      executeAnimation: false,
    })),
}));
