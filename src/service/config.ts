export let BaseURL: string;

// 根据当前环境(区分生产和开发环境)
if (process.env.NODE_ENV === 'development') {
  // npx NeteaseCloudMusicApi 如果端口号有冲突请在craco.config.js中更改
  BaseURL = 'http://localhost:3000';
} else {
  BaseURL = '';
}
