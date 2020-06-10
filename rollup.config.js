import commonjs from "rollup-plugin-commonjs"
import copy from "rollup-plugin-copy"
import packageJson from "./package.json"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import resolve from "rollup-plugin-node-resolve"
import sass from "rollup-plugin-sass"
import typescript from "rollup-plugin-typescript2"

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    sass({
      insert: true,
    }),
  ],
  external: ["styled-components"],
  globals: { "styled-components": "styled" },
}
