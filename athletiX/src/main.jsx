import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Asegúrate de importar 'Provider' desde 'react-redux'
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);