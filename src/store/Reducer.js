const initialState = {
  age: 21,
};
// state wil use the default state if no other state is provided. Run once
const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "AGE_UP":
      newState.age += action.value;
      break;

    case "AGE_DOWN":
      newState.age -= action.value;
      break;
  }
  return newState;
};

export default reducer;
