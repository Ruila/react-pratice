import { combineReducers } from 'redux';
import loadingReducer from './loading.js';
import loginReducer from './login.js';

console.log('index reducers', loginReducer, loadingReducer)

const reducers = combineReducers({
  load: loadingReducer,
  loginCheck: loginReducer,
})

export default reducers