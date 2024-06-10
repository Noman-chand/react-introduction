import { configureStore } from "@reduxjs/toolkit";
import  productsSlice from '../Fetures/apiSlice'
const store = configureStore({
    reducer:{
    apiData:productsSlice,
    }
})
export default store;