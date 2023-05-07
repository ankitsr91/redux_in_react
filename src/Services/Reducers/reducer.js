const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "INCREAMENT":
      return state + action.payload;
    case "DECREAMENT":
      return state - action.payload;
    default:
      return state;
  }
};

export default changeTheNumber;
