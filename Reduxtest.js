// // line below will allow us to create a store.
// const { createStore } = require("redux");

// //This is the default value for our state.
// const initialState = {
//   age: 21,
// };

// // Reducer has 2 params state, and action
// //if we want to change state we create a copy, we dont mutate.
// //*Always Return in the Reducer*
// const myReducer = (state = initialState, action) => {
//   const newState = { ...state };

//   if (action.type === "ADD") {
//     newState.age += action.val;
//   }
//   if (action.type === "SUBSTRACT") {
//     newState.age -= action.val;
//   }
//   return newState; // newState will set a new State in the store.
// };

// const store = createStore(myReducer); // store takes a state and a reducer.
// // After the store is created we Suscribe
// //Whenever there is a change in state it automatically updates the state or tells me.
// store.subscribe(() => {
//   console.log("state changed" + JSON.stringify(store.getState()));
// });
// //val aka known as the payload

// store.dispatch({ type: "ADD", val: 10 });

// store.dispatch({ type: "SUBSTRACT", val: 5 });
