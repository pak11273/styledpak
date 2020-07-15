import * as CSS from "csstype"

interface Ibg {
  default: CSS.ColorProperty
}

export interface ThemeColors {
  default: CSS.ColorProperty
  primary: CSS.ColorProperty
  secondary: CSS.ColorProperty
  link: CSS.ColorProperty
  success: CSS.ColorProperty
  warning: CSS.ColorProperty
  error: CSS.ColorProperty
  heading: CSS.ColorProperty
  text: CSS.ColorProperty
  disabled: CSS.ColorProperty
  border: CSS.ColorProperty
  black: string
  blacks: CSS.ColorProperty[]
  blue: CSS.ColorProperty
  navy: CSS.ColorProperty
  "near-black": CSS.ColorProperty
  pak: {
    bg?: {
      default: CSS.ColorProperty
      active: CSS.ColorProperty
    }
  }
  white: CSS.ColorProperty
  whites: CSS.ColorProperty[]
  "dark-gray": CSS.ColorProperty
  "mid-gray": CSS.ColorProperty
  gray: CSS.ColorProperty
  silver: CSS.ColorProperty
  "light-silver": CSS.ColorProperty
  "moon-gray": CSS.ColorProperty
  "light-gray": CSS.ColorProperty
  "near-white": CSS.ColorProperty
  transparent: CSS.ColorProperty
}

export const colors: ThemeColors = {
  pak: {
    bg: {
      default: "#708090",
      active: "#708090",
    },
  },
  default: "#708090",
  primary: "#423EA2",
  secondary: "#1890ff",
  link: "#1890ff",
  success: "#52c41a",
  warning: "#faad14",
  error: "#e84118",
  heading: "#423EA2",
  text: "#000",
  disabled: "#f5222d",
  border: "#423EA2",
  black: "#000e1a",
  white: "#fff",
  blue: "#007ce0",
  navy: "#004175",
  "near-black": "#111",
  "dark-gray": "#333",
  "mid-gray": "#555",
  gray: " #777",
  silver: "#999",
  "light-silver": "#aaa",
  "moon-gray": "#ccc",
  "light-gray": "#eee",
  "near-white": "#f4f4f4",
  transparent: "transparent",
  blacks: [
    "rgba(0,0,0,.0125)",
    "rgba(0,0,0,.025)",
    "rgba(0,0,0,.05)",
    "rgba(0,0,0,.1)",
    "rgba(0,0,0,.2)",
    "rgba(0,0,0,.3)",
    "rgba(0,0,0,.4)",
    "rgba(0,0,0,.5)",
    "rgba(0,0,0,.6)",
    "rgba(0,0,0,.7)",
    "rgba(0,0,0,.8)",
    "rgba(0,0,0,.9)",
  ],
  whites: [
    "rgba(255,255,255,.0125)",
    "rgba(255,255,255,.025)",
    "rgba(255,255,255,.05)",
    "rgba(255,255,255,.1)",
    "rgba(255,255,255,.2)",
    "rgba(255,255,255,.3)",
    "rgba(255,255,255,.4)",
    "rgba(255,255,255,.5)",
    "rgba(255,255,255,.6)",
    "rgba(255,255,255,.7)",
    "rgba(255,255,255,.8)",
    "rgba(255,255,255,.9)",
  ],
}
