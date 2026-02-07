import js from '@eslint/js';
import globals from 'globals';
// eslint-config-prettier는 설정을 끄는 역할을 하므로 문자열로 extends에 사용하기 위해 import를 유지합니다.
import prettierConfig from 'eslint-config-prettier';

// ----------------------------------------------------
// 💡 모듈 임포트 헬퍼: CommonJS/ESM 호환성 문제 해결
// ----------------------------------------------------
/**
 * CommonJS 모듈을 ESM 환경에서 안전하게 가져오기 위한 헬퍼 함수
 */
function safelyImportPlugin(module) {
  // .default 속성을 확인하여 플러그인 객체를 안전하게 추출합니다.
  return module.default || module;
}

// ----------------------------------------------------
// 플러그인 Import
// ----------------------------------------------------
import reactModule from 'eslint-plugin-react';
import reactHooksModule from 'eslint-plugin-react-hooks';
import reactRefreshModule from 'eslint-plugin-react-refresh';
import jsxA11yModule from 'eslint-plugin-jsx-a11y';
import prettierModule from 'eslint-plugin-prettier';
import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

// ----------------------------------------------------
// 안전하게 플러그인 객체 추출 및 설정 사용
// ----------------------------------------------------
const react = safelyImportPlugin(reactModule);
const reactHooks = safelyImportPlugin(reactHooksModule);
const reactRefresh = safelyImportPlugin(reactRefreshModule);
const jsxA11y = safelyImportPlugin(jsxA11yModule);
const prettierPlugin = safelyImportPlugin(prettierModule);

// defineConfig 함수를 사용하지 않고 바로 배열을 export 합니다.
export default [
  // 1. 전역 무시 파일 설정 (globalIgnores 대체)
  {
    ignores: ['dist', 'node_modules'],
  },

  // 2. JS/JSX 파일에 대한 기본 설정
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],

      // 💡 오류 해결: 문자열 대신 직접 임포트된 플러그인 객체의 설정 사용
      reactRefresh.configs.recommended,
      jsxA11y.configs.recommended,

      // Prettier 충돌 방지 설정은 문자열로 유지 (올바른 사용법)
      prettierConfig,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    // 💡 추출된 플러그인 객체를 등록합니다.
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
      prettier: prettierPlugin,
    },
    rules: {
      // 💡 유용한 규칙들
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'off',
      'no-console': 'warn',
      'react/prop-types': 'off',

      // Prettier 규칙을 오류로 처리
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'prettier/prettier': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // 3. TypeScript/TSX 파일에 대한 설정
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tsEslint.configs.recommended,
      prettierConfig, // TS 파일에도 Prettier 충돌 방지 설정 추가
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        // tsconfig.json 경로를 프로젝트에 맞게 확인하세요.
        project: './tsconfig.json',
      },
    },
    // 💡 추출된 플러그인 객체를 등록합니다.
    plugins: {
      '@typescript-eslint': tsEslint,
      prettier: prettierPlugin,
    },
    rules: {
      'no-unused-vars': 'off', // JS 기본 규칙 끄기
      '@typescript-eslint/no-unused-vars': [
        'error',
        { varsIgnorePattern: '^[A-Z_]' },
      ],
      'prettier/prettier': 'error',
    },
  },
];
