import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";

const isProd = process.env.NODE_ENV === "production";
const isMINIFY = !!process.env.MINIFY;

const plugins = [
    typescript({
        tsconfig: isProd ? "tsconfig.prod.json" : "tsconfig.json",
    }),
    json(),
    babel({ babelHelpers: "bundled" }),
    commonjs(),
    resolve(),
    replace({
        preventAssignment: true,
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    isMINIFY ? terser() : null,
];

export default {
    input: "./src/index.ts",
    output: {
        name: "EveMonitor",
        sourcemap: !process.env.MINIFY,
    },
    external: [],
    plugins,
};
