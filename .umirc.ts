import { defineConfig } from 'umi';

export default defineConfig({
  title: '管理平台',
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {},
  // 是否启用按需加载
  // dynamicImport: {},
  // 设置 node_modules 目录下依赖文件的编译方式
  nodeModulesTransform: {
    type: 'none',
  },
  targets: {
    ie: 11,
  },
  theme: {
    '@primary-color': '#1DA57A',
  },
  proxy: {
    '/api': {
      target: 'http://128.1.1.1:8010/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
