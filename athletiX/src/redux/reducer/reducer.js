import {
  FILTERS_BRAND,
  FILTERS_SPORT,
  CLEAR_FILTERS,
  GET_ITEMS,
  SORT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../action-types/action-types";
import { sortItems } from "../actions/actions";

const initialState = {
  items: [],
  allItems: [],
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state, items: action.payload, allItems: action.payload };
    case FILTERS_BRAND:
      const brand = action.payload;
      const brandFilterItems = state.items.filter(
        (item) => item.marca == brand
      );
      return {
        ...state,
        items: brandFilterItems,
      };
    case FILTERS_SPORT:
      const sport = action.payload;
      const sportFilterItems = state.items.filter(
        (item) => item.deporte == sport
      );
      return {
        ...state,
        items: sportFilterItems,
      };
    case CLEAR_FILTERS:
        return{
            ...state,
            items: state.allItems
        }
    case SORT:
      const sortType = action.payload;
      let sortedItems = [];

      if (sortType === "A") {
        sortedItems = [...state.items].sort((a, b) => b.precio - a.precio);
      } else if (sortType === "B") {
        sortedItems = [...state.items].sort((a, b) => a.precio - b.precio);
      }
      return {
        ...state,
        items: sortedItems,
      };
    case ADD_TO_CART:
      const itemToSearch = action.payload;
      const itemToAdd = state.allItems.find((item) => item.id === itemToSearch);

      return {
        ...state,
        cart: [...state.cart, itemToAdd], 
      };
      case REMOVE_FROM_CART:
        const itemToRemove = action.payload;
        const updatedCart = state.cart.filter((item) => item.id !== itemToRemove);
      
        return {
          ...state,
          cart: updatedCart,
        };
    default:
      return { ...state };
  }
};

export default reducer;
