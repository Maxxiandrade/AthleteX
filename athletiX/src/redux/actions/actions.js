import { GET_ITEMS } from "../action-types/action-types"


export const getItems = (items)=>async(dispatch)=>{
    try {
        dispatch({type: GET_ITEMS, payload: items})
    } catch (error) {
        throw Error(error)
    }
};


