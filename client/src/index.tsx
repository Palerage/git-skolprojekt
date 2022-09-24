import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
//import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './context/StoreContext';
import { store } from './redux/store/configureStore';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StoreProvider>
        <Provider store = {store}>
        <App />
        </Provider>
      </StoreProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);