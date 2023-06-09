const path = require('path');
const CracoLess = require('craco-less');
const resolve = (dir) => path.resolve(__dirname, dir);
// 配置别名
module.exports = {
  plugins: [{ plugin: CracoLess }],
  webpack: {
    alias: {
      '@': resolve('src'),
    },
  },
  devServer: {
    port: 8080, // 指定你想要的端口号
  },
};
