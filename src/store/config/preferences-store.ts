import { create } from "zustand";
import { persist } from "zustand/middleware";

import { InterfaceState } from "./preferences-store-type";

export const usePreferencesStore = create<InterfaceState>()(
  persist(
    (set) => ({
      theme: "light",
      primaryColor: "red",
      font: "comfortaa",

      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
      setPrimaryColor: (color) => set({ primaryColor: color }),
      setFont: (font) => set({ font }),
    }),
    {
      name: "store-preferences",
    }
  )
);

// Hook para acessar apenas os dados
export function usePreferencesStoreData<K extends keyof InterfaceState>(
  key: K
) {
  return usePreferencesStore((state) => state[key]);
}

// Hook para acessar apenas os métodos
export function usePreferencesStoreMethods<K extends keyof InterfaceState>(
  key: K
) {
  return usePreferencesStore((state) => {
    // Filtra apenas funções do estado
    const value = state[key];
    if (typeof value === "function") return value;
    return undefined;
  }) as InterfaceState[K] extends (...args: any) => any
    ? InterfaceState[K]
    : never;
}
