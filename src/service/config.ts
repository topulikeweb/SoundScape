export let BaseURL: string;

// 根据当前环境(区分生产和开发环境)
if (process.env.NODE_ENV === 'development') {
  BaseURL = 'http://123.207.32.32:9002';
} else {
  BaseURL = '';
}
