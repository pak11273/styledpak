import * as CSS from "csstype"

import { Theme } from "styled-system"
import { colors } from "./colors"
import { space } from "./space"

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

export const theme: Theme = {
  // name: "main",
  colors: {
    ...colors,
    pak: {
      ...colors.pak.bg,
    },
  },
  breakpoints,
  space: {
    ...space,
  },
  fontSizes: [12, 14, 16, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
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
}
