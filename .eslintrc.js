module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    env: {
        browser: true,
        jest: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        project: "./tsconfig.json",
    },
    rules: {
        "linebreak-style": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-this-alias": [
            "error",
            {
                allowDestructuring: true,
                allowedNames: ["self"],
            },
        ],
    },
};
