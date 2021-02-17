import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Loading from './components/twoDaysWeatherComponents/loading.js';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { BrowserRouter } from "react-router-dom";
import cookie from 'js-cookie';
import reducers from './redux/reducers/index.js';

// function loadingReducer(state = {}, action) {
//   switch(action.type){
//     case 'Loading':
//       console.log('dispatch loding');
//       return{
//         state: true,
//       };
//     case 'Done':
//       return {
//         state: false,
//       };
//     default:
//       return{
//         state: false,
//       };
//   }
// }

// function loginReducer(state = {}, action) {
//   switch(action.type){
//     case 'Login':
//       return {
//         state: true,
//       }
//     default:
//       if(cookie.get('cookie1') === 'abc1234') {
//         return{
//           state: true,
//         };
//       } else {
//         return{
//           state: true,
//         };
//       }
      
//   }
// }

// const reducers = combineReducers({
//   load: loadingReducer,
//   loginCheck: loginReducer,
// })

const store = createStore(reducers, {
  load: false,
  loginCheck: false,
});

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
