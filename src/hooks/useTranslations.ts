"use client";
import { locales } from "@/locales";
import { useLocaleStore } from "@/store/locale";
import { useEffect } from "react";

const getMessages = (locale: string) => locales[locale] || locales["en"];

const useTranslations = (sectionId: string) => {
  const { locale, setLocale } = useLocaleStore((store) => ({
    locale: store.locale,
    setLocale: store.setLocale,
  }));

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale");
    if (!savedLocale || !Object.keys(locales).includes(savedLocale)) {
      localStorage.setItem("locale", "en");
    } else {
      setLocale(savedLocale);
    }
  }, [setLocale]);

  const messages = getMessages(locale);

  const section = messages[sectionId] || locales["en"][sectionId];

  return {
    t: (key: string): string => {
      return section[key] || locales["en"][sectionId][key];
    },
    locale,
    setLocale: (locale: string) => {
      localStorage.setItem("locale", locale);
      setLocale(locale);
    },
  };
};

export default useTranslations;
