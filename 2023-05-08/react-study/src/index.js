import ReactDOM from 'react-dom/client';
import Router from './pages/router';
import { Provider } from 'react-redux';
import { store } from './reduce/index';
import './reset.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <Router />
</Provider>
);