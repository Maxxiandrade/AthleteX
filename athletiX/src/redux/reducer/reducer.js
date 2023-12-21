import {
    GET_ITEMS
  } from "../action-types/action-types";
  
  const initialState = {
    items: [],
    allItems: []
  };
 
  const reducer = (state = initialState, action) => {
    switch (action.type) {
     case GET_ITEMS:
        return{...state, items: action.payload, allItems:action.payload}
      default:
        return { ...state };
    }
  };
  
  export default reducer;
  