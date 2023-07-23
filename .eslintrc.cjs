/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  env: {
    node: true //告诉 eslint 我在node环境运行
  },
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // prettier专注于代码的美观度 (格式化工具)
    // 前置:
    // 1. 禁用格式化插件 prettier  format on save 关闭
    // 2. 安装Eslint插件，并配置保存时自动修复
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true, // 单引号
        semi: false, // 无分号
        printWidth: 80, // 每行宽度至少80字符
        trailingComma: 'none', // 不加对象|数组最后逗号
        endOfLine: 'auto' // 换行符号不限制(win mac 不一致)
      }
    ],
    // ESLint关注于规范
    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: ['index'] // vue组件名称多单词组成(忽略index.vue)
      }
    ],
    'vue/no-setup-props-destructure': ['off'], // 关闭 props 解构的校验 (props解构丢失响应式)
    // 添加未定义变量错误提示，create-vue@3.6.3 关闭，off关 error开
    'no-undef': 'error'
  }
}
