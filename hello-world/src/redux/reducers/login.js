import cookie from 'js-cookie';
const loginReducer = (state = {}, action) => {
  switch(action.type){
    case 'Login':
      return {
        state: true,
      }
    default:
      if(cookie.get('cookie1') === 'abc1234') {
        return{
          state: true,
        };
      } else {
        return{
          state: true,
        };
      }
      
  }
}

export default loginReducer