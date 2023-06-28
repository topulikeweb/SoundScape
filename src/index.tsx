import ReactDOM from 'react-dom/client';
import App from '@/App';
import 'normalize.css';
import './assets/css/reset';
import { HashRouter } from 'react-router-dom';
// 配置redux
import { Provider } from 'react-redux';
import store from '@/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
);
