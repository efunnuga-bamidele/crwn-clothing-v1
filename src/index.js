import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//redux
import { Provider } from 'react-redux';
import { store } from './store/store';

// import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

//context
// import { UserProvider } from './context/user.context';
import { CategoriesProvider } from './context/categories.context';
import { CartProvider } from './context/cart.context';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
       {/* <UserProvider> */}
          <CategoriesProvider>
            <CartProvider>
                <App />
            </CartProvider>
          </CategoriesProvider>
       {/* </UserProvider> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
