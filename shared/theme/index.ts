// import { Theme } from "styled-system"

import { colors } from "./colors"

// import { space } from "./space"

// export const breakpoints: string[] = ["319px", "424px", "767px", "1023px"]

let breakpoints: any = ["40em", "52em", "64em", "80em"]

// aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

export default {
  breakpoints,
}

const baseTheme = {
  colors: {
    ...colors,
  },
  breakpoints,
  space: [0, 2, 4, 6, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [6, 8, 10, 12, 14, 16, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  radii: [0, 2, 4, 6, 8],
}

export const theme = {
  ...baseTheme,
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    normal: "normal",
    tracked: "0.1em",
    tight: "-0.05em",
    mega: "0.25em",
  },
  fonts: {
    serif: "athelas, georgia, times, serif",
    sansSerif:
      '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif',
  },
  borders: [
    0,
    "1px solid",
    "2px solid",
    "4px solid",
    "8px solid",
    "16px solid",
    "32px solid",
  ],
  buttons: {
    primary: { color: "white", bg: "#423EA2" },
    secondary: { color: "white", bg: "#1890ff" },
    default: { color: "white", bg: "#708090" },
    success: { color: "white", bg: "#52c41a" },
    warning: { color: "white", bg: "#faad14" },
    error: { color: "white", bg: "#e84118" },
    link: { color: "white", bg: "#1890ff" },
  },
  buttonSizes: {
    small: {
      height: "30px",
      fontSize: baseTheme.fontSizes[1],
      letterSpacing: "1px",
      padding: `0 14px`,
      borderRadius: baseTheme.radii[2],
    },
    medium: {
      height: "36px",
      fontSize: baseTheme.fontSizes[3],
      fontWeight: 500,
      padding: `8px 16px`,
      borderRadius: baseTheme.radii[2],
    },
    large: {
      height: "44px",
      fontSize: baseTheme.fontSizes[5],
      padding: `10px 22px`,
      borderRadius: baseTheme.radii[3],
    },
    xlarge: {
      height: "54px",
      fontSize: baseTheme.fontSizes[6],
      padding: `12px 30px`,
      borderRadius: baseTheme.radii[3],
    },
    xxlarge: {
      height: "66px",
      fontSize: baseTheme.fontSizes[7],
      padding: `14px 34px`,
      borderRadius: baseTheme.radii[3],
    },
  },
}
