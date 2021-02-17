
const loadingReducer = (state, action) => {
  console.log('loading action', state)
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