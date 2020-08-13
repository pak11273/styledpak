import { darken, lighten } from "polished"

import { colors } from "./colors"

let breakpoints: any = ["319px", "424px", "767px", "1023px"]

// aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

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
    primary: {
      color: "white",
      bg: "#423EA2",
      "&:hover": {
        backgroundColor: lighten(0.2, colors.primary),
      },
      "&:active": {
        backgroundColor: darken(0.2, colors.primary),
      },
    },
    secondary: {
      color: "white",
      bg: "#1890ff",
      "&:hover": {
        backgroundColor: lighten(0.2, colors.secondary),
      },
      "&:active": {
        backgroundColor: darken(0.2, colors.secondary),
      },
    },
    default: {
      color: "white",
      bg: "#708090",
      "&:hover": {
        backgroundColor: lighten(0.2, colors.default),
      },
      "&:active": {
        backgroundColor: darken(0.2, colors.default),
      },
    },
    success: {
      color: "white",
      bg: "#52c41a",
      "&:hover": {
        backgroundColor: lighten(0.2, colors.success),
      },
      "&:active": {
        backgroundColor: darken(0.2, colors.success),
      },
    },
    warning: {
      color: "white",
      bg: "#faad14",
      "&:hover": {
        backgroundColor: lighten(0.2, colors.warning),
      },
      "&:active": {
        backgroundColor: darken(0.2, colors.warning),
      },
    },
    error: {
      color: "white",
      bg: "#e84118",
      "&:hover": {
        backgroundColor: lighten(0.2, colors.error),
      },
      "&:active": {
        backgroundColor: darken(0.2, colors.error),
      },
    },
    link: {
      color: "white",
      bg: "#1890ff",
      "&:hover": {
        backgroundColor: lighten(0.2, colors.link),
      },
      "&:active": {
        backgroundColor: darken(0.2, colors.link),
      },
    },
  },
  buttonSizes: {
    small: {
      // height: "30px",
      fontSize: baseTheme.fontSizes[1],
      letterSpacing: "1px",
      padding: `8px 10px`,
      borderRadius: baseTheme.radii[2],
    },
    medium: {
      // height: "36px",
      fontSize: baseTheme.fontSizes[3],
      fontWeight: 500,
      padding: `10px 16px`,
      borderRadius: baseTheme.radii[2],
    },
    large: {
      // height: "44px",
      fontSize: baseTheme.fontSizes[5],
      padding: `12px 22px`,
      borderRadius: baseTheme.radii[3],
    },
    xlarge: {
      // height: "54px",
      fontSize: baseTheme.fontSizes[6],
      padding: `14px 30px`,
      borderRadius: baseTheme.radii[3],
    },
    xxlarge: {
      // height: "66px",
      fontSize: baseTheme.fontSizes[7],
      padding: `16px 34px`,
      borderRadius: baseTheme.radii[3],
    },
  },
  avatarSizes: {
    small: {
      fontSize: baseTheme.fontSizes[1],
    },
    medium: {
      fontSize: baseTheme.fontSizes[3],
      height: "30px",
      width: "30px",
    },
    large: {
      fontSize: baseTheme.fontSizes[5],
    },
    xlarge: {
      fontSize: baseTheme.fontSizes[6],
    },
    xxlarge: {
      fontSize: baseTheme.fontSizes[7],
    },
  },
}
