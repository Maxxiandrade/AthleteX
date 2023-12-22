import { GET_ITEMS, SORT, FILTERS_BRAND, FILTERS_SPORT, ADD_TO_CART, REMOVE_FROM_CART, CLEAR_FILTERS } from "../action-types/action-types"


export const getItems = (items)=>(dispatch)=>{
    try {
        dispatch({type: GET_ITEMS, payload: items})
    } catch (error) {
        throw Error(error)
    }
};

export const brandFilters = (brand)=>(dispatch)=>{
    try {
        dispatch({type:FILTERS_BRAND, payload:brand})
    } catch (error) {
        throw Error(error)
    }
}

export const sportFilters = (sport)=>(dispatch)=>{
    try {
        dispatch({type:FILTERS_SPORT, payload:sport})
    } catch (error) {
        throw Error(error)
    }
}

export const clearFilters = ()=>(dispatch)=>{
    try {
        dispatch({type:CLEAR_FILTERS, payload: 'Clear'})
    } catch (error) {
        throw Error(error)
    }
}

export const sortItems = (sort)=>(dispatch)=>{
    try {
        dispatch({type:SORT, payload:sort})
    } catch (error) {
        throw Error(error)
    }
}

export const addToCart = (item)=>(dispatch)=>{
    try {
        dispatch({type:ADD_TO_CART, payload: item})
    } catch (error) {
        throw Error(error)
    }
}

export const removeFromCart = (item)=>(dispatch)=>{
    try {
        dispatch({type: REMOVE_FROM_CART, payload:item})
    } catch (error) {
        throw Error(error)
    }
}