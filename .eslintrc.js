module.exports = {
  root: true,
  extends: [
    'airbnb',
    'eslint:recommended',
    '@react-native-community',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': 'off',
    'prettier/prettier': 0,
    semi: ['error', 'always'],
    'no-bitwise': 0,
    'no-prototype-builtins': 0,
    'react-native/no-unused-styles': 2,
    'react-native/no-inline-styles': 0,
    'no-shadow': 'off',
    // '@typescript-eslint/no-shadow': ['error'],
    // 'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowFunctions: true,
      },
    ],
    'react/require-default-props': [
      'error',
      {
        ignoreFunctionalComponents: true,
      },
    ],
  },
};
