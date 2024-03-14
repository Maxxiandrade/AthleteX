import { API_URL } from "../../components/Acount/Adress";
import { GET_INFO, GET_ITEMS, SORT, FILTERS_BRAND, FILTERS_SPORT, ADD_TO_CART, REMOVE_FROM_CART, CLEAR_FILTERS, MOVE_PAGE, CLEAR_STATE, GET_BY_NAME, GET_PUCHARSES, CLEAR_CART } from "../action-types/action-types"
import axios from 'axios';

export const getItems = ()=>async(dispatch)=>{
    try {
       const {data} = await axios.get(`${API_URL}/items`)
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
        await axios.post(`${API_URL}/additem`, item)
    } catch (error) {
        throw Error(error)
    }
}

export const getUserInfo = (email)=>async(dispatch)=>{
    try {
        const {data} = await axios(`${API_URL}/user?email=${email}`)
        dispatch({
            type:GET_INFO,
            payload: data
        })
    } catch (error) {
        throw Error(error)
    }
}

export const clearState = ()=>(dispatch)=>{
    dispatch({
        type:CLEAR_STATE
    })
}

export const getByName=(string)=>async(dispatch)=>{
    try {
        console.log(string);
        const {data} = await axios.get(`${API_URL}/getbyname?string=${string}`)
        console.log(data);
        dispatch({
            type:GET_BY_NAME,
            payload: data
        })
        
    } catch (error) {
        throw Error(error)
    }
}

export const getPucharses=()=>async(dispatch)=>{
    try {
        const {data} = await axios.get(`${API_URL}/allpucharses`)
        dispatch({
            type: GET_PUCHARSES,
            payload: data
        })
    } catch (error) {
        throw Error(error)
    }
}

export const clearCart = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:CLEAR_CART,
            payload:[]
        })
    } catch (error) {
        throw Error(error)
    }
}