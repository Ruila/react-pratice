import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Loading from './components/twoDaysWeatherComponents/loading.js';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from "react-router-dom";
import reducers from './redux/reducers/index.js';

const store = createStore(reducers);

ReactDOM.render(
  // <React.StrictMode>
  //   <App />

  // </React.StrictMode>,
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <Loading />
   </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')|| document.createElement('div')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
