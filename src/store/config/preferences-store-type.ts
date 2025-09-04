export type PreferencesTheme = "light" | "dark";
export type PreferencesPrimaryColor =
  | "red"
  | "blue"
  | "yellow"
  | "green"
  | "orange"
  | "purple";

export const PreferencesPrimaryColorValues = [
  "red",
  "blue",
  "yellow",
  "green",
  "orange",
  "purple",
] as const;

export type PreferencesFont =
  | "comfortaa"
  | "montserrat"
  | "quicksand"
  | "inter";
export const PreferencesFontValues = [
  "comfortaa",
  "montserrat",
  "quicksand",
  "inter",
] as const;

export interface InterfaceState {
  theme: PreferencesTheme;
  primaryColor: PreferencesPrimaryColor;
  font: PreferencesFont;

  toggleTheme: () => void;
  setTheme: (theme: PreferencesTheme) => void;
  setPrimaryColor: (color: PreferencesPrimaryColor) => void;
  setFont: (font: PreferencesFont) => void;
}
