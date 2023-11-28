module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "semi": "warn",
    "sort-imports": "warn",
    "array-bracket-newline": "warn",
    "no-alert": "error",
    "no-console": "warn",
    "no-duplicate-imports": "error",
    "no-unused-vars": "error",
    "quotes": ["error", "double"]
  }
}
