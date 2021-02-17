
const loadingReducer = (state = {}, action) => {
  switch(action.type){
    case 'Loading':
      console.log('dispatch loding');
      return{
        state: true,
      };
    case 'Done':
      return {
        state: false,
      };
    default:
      return{
        state: false,
      };
  }
}

export default loadingReducer