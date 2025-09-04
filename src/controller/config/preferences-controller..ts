import { useEffect } from "react";

import { usePreferencesStoreData } from "@/store/config/preferences-store";

export function PreferencesController() {
  const theme = usePreferencesStoreData("theme");
  const font = usePreferencesStoreData("font");
  const primaryColor = usePreferencesStoreData("primaryColor");

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", theme === "dark");

    root.setAttribute("data-theme", theme || "light");
    root.setAttribute("data-primary", primaryColor || "red");
    root.setAttribute("data-font", font || "comfortaa");
  }, [theme, primaryColor, font]);

  return null;
}
