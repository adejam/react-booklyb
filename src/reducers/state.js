const stateReducer = (state = 'invalid', action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CHANGE_STATE':
      return payload;
    default:
      return state;
  }
};

export default stateReducer;
