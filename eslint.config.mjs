import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import jest from 'eslint-plugin-jest'



export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // jest.configs.recommended,
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      //no console.log
      "no-console": "error",
    },
    plugins: {
      jest: jest
    },
  },
];