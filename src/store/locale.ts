import { create } from "zustand";

interface LocaleStore {
  locale: string;
  setLocale: (locale: string) => void;
}

export const useLocaleStore = create<LocaleStore>((set) => ({
  locale: "en",
  setLocale: (locale) => set({ locale }),
}));
