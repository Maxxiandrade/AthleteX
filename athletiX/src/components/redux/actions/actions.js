import { GET_ITEMS } from "../action-types/action-types";

export const getItems = (items)=>(dispatch)=>{
    return{type: GET_ITEMS, payload: items}
}