import js from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        process: "readonly",
        console: "readonly"
      }
    }
  },
  js.configs.recommended
];
