module.exports = {
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.json": ["prettier --write--parser json"],
    "*.vue": ["prettier --write"],
    "*.md": ["prettier --write"],
};
