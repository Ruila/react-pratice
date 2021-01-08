import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  load: false
};

function reducer(state = initialState, action) {
  switch(action.type){
    case 'Loading':
      return{
        load: true
      };
    case 'Done':
      return {
        load: false
      };
    default:
      return{
        load: false
      };
  }
}

const store = createStore(reducer);

ReactDOM.render(
  // <React.StrictMode>
  //   <App />

  // </React.StrictMode>,
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')|| document.createElement('div')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
