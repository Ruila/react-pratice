
const loadingReducer = (state, action) => {
  switch(action.type){
    case 'Loading':
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