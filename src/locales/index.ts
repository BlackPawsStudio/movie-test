import { en } from "./en";

export type Locales = "en" | "ru";

export const locales: {
  [key: string]: {
    [key: string]: {
      [key: string]: string;
    };
  };
} = {
  en,
};
