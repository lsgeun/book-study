import js from '@eslint/js';
import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import css from '@eslint/css';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';

export default defineConfig([
  {
    // JavaScript/TypeScript 기본 설정
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { ecmaVersion: 2022, sourceType: 'module', globals: { ...globals.browser, ...globals.node } },
    rules: {
      // 🎯 const 재할당 관련 핵심 규칙들
      'no-const-assign': 'error', // const 변수 재할당 금지
      'no-var': 'error', // var 사용 금지 (const/let만 사용)
      'prefer-const': 'error', // 재할당하지 않는 변수는 const 사용
      'no-undef': 'error', // 정의되지 않은 변수 사용 금지
      'no-unused-vars': 'error', // 사용하지 않는 변수 금지
      'no-redeclare': 'error', // 같은 변수 중복 선언 금지

      // 🔧 추가 보안 규칙들
      'no-global-assign': 'error', // 전역 변수 재할당 금지
      'no-implicit-globals': 'error', // 암시적 전역 변수 생성 금지
      'no-implicit-coercion': 'warn', // 암시적 타입 변환 경고
      'no-magic-numbers': [
        'warn',
        {
          // 매직 넘버 사용 경고
          ignore: [0, 1, -1],
          ignoreArrayIndexes: true,
        },
      ],

      // 🚀 배열 관련 규칙들
      'prefer-destructuring': [
        'error',
        {
          array: true,
          object: true,
        },
      ],
      'no-sparse-arrays': 'error', // 희소 배열 금지
      'array-callback-return': 'error', // 배열 메서드는 반환값 필요
    },
  },
  // Vue.js 특화 설정
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    rules: {
      // Vue에서 const 재할당 관련
      'no-const-assign': 'error',
      'vue/no-unused-vars': 'error',
      'vue/no-unused-components': 'error',
      'vue/require-v-for-key': 'error',

      // Vue reactive 관련 규칙 (커스텀)
      'vue/no-mutating-props': 'error', // props 직접 수정 금지
      'vue/no-ref-as-operand': 'error', // ref를 직접 연산자로 사용 금지
    },
  },
  { files: ['**/*.json'], plugins: { json }, language: 'json/json', extends: ['json/recommended'] },
  {
    files: ['**/*.jsonc'],
    plugins: { json },
    language: 'json/jsonc',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.json5'],
    plugins: { json },
    language: 'json/json5',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/commonmark',
    extends: ['markdown/recommended'],
    rules: {
      'markdown/no-html': 'warn',
    },
  },
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended'],
    rules: {
      ...css.configs.recommended.rules,
      'css/no-duplicate-selectors': 'error',
      'css/no-empty-blocks': 'error',
    },
  },

  prettier,
]);
