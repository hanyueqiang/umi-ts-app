import { defineConfig } from 'umi';

export default defineConfig({
  // 设置 node_modules 目录下依赖文件的编译方式
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  history: {
    type: 'memory',
  },
});
