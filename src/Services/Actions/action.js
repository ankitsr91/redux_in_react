export const increament = (data) => {
  return {
    type: "INCREAMENT",
    payload: data,
  };
};

export const decreament = (data) => {
  return {
    type: "DECREAMENT",
    payload: data,
  };
};