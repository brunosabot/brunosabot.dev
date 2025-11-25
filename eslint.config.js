import nextPlugin from "@next/eslint-plugin-next";
import perfectionist from "eslint-plugin-perfectionist";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "node_modules/**",
    ],
  },
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    ...perfectionist.configs["recommended-natural"],
  },
  {
    files: ["**/*.{ts,tsx}"],
    ...nextPlugin.configs["core-web-vitals"],
  },
];
