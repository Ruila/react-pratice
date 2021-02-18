import cookie from 'js-cookie';
const loginReducer = (state , action) => {
  switch(action.type){
    case 'Login':
      return {
        state: true,
      }
    default:
      if(cookie.get('user')) {
        if(JSON.parse(cookie.get('user')).text === 'succeed'){
          return{
            state: true,
          };
        }
      } else {
        return{
          state: false,
        };
      }
      
  }
}

export default loginReducer