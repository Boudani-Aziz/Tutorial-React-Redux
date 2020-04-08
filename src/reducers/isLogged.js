const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return true;
    case 'SIGN_UP':
      return false;
    default:
      return state;
  }
};

export default loggedReducer;
