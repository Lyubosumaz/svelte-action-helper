module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
  "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
      "airbnb-typescript/base",
      "plugin:prettier/recommended",
      "prettier"
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte']
  },
  env: {
    es6: true,
    browser: true
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  settings: {
    'svelte3/typescript': require('typescript'),
    // ignore style tags in Svelte because of Tailwind CSS
    // See https://github.com/sveltejs/eslint-plugin-svelte3/issues/70
    'svelte3/ignore-styles': () => true
  },
  plugins: ['svelte3', '@typescript-eslint'],
  ignorePatterns: ['node_modules'],
   rules: {
      "no-console": 2, // Remember, this means error!
      "import/prefer-default-export": "off",
      "class-methods-use-this": "off",
      "import/no-extraneous-dependencies": [
         error,
         {
            devDependencies: true,
            optionalDependencies: false,
            peerDependencies: false
         }
      ]
   }
}