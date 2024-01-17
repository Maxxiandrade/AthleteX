import { ADD_ITEM, GET_ITEMS, SORT, FILTERS_BRAND, FILTERS_SPORT, ADD_TO_CART, REMOVE_FROM_CART, CLEAR_FILTERS, MOVE_PAGE } from "../action-types/action-types"
import axios from 'axios';

export const getItems = ()=>async(dispatch)=>{
    try {
       const {data} = await axios.get('http://localhost:3001/items')
        dispatch({type: GET_ITEMS, payload: data})
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

export const movePage = (pagenumber)=>(dispatch)=>{
    try {
        dispatch({type:MOVE_PAGE, payload:pagenumber})
    } catch (error) {
        throw Error(error)
    }
}

export const addItem = (item)=>async()=>{
    try {
        console.log(item);
        await axios.post('http://localhost:3001/additem', item)
    } catch (error) {
        throw Error(error)
    }
}