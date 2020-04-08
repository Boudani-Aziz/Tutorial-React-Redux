export const increment = (x) => {
  return {
    type: 'INCREMENT',
    payload: x,
  };
};
export const decrement = (x) => {
  return {
    type: 'DECREMENT',
    payload: x,
  };
};
export const einloggen = () => {
  return {
    type: 'SIGN_IN',
  };
};
export const ausloggen = () => {
  return {
    type: 'SIGN_UP',
  };
};
