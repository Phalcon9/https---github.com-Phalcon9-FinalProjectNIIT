import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    productsData: [],
    carts: [],
    loading: false,
    error: null,
};

const productSlice = createSlice({

    name: "products",
    initialState,
    reducers: {
        fetchProductsStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchProductsSuccess: (state, action) => {
            state.loading = false;
            state.products = action.payload;
        },
        fetchProductsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        // addToCart: (state, action) => {
        //     state.carts.push(action.payload)
        //     // const { id } = action.payload;
        //     // const productExist = state.products.find((item) => item.id === id);
          
        //     // if (productExist) {
        //     //   productExist.quantity += 1;
        //     // } else {
        //     //   state.products.push({ ...action.payload, quantity: 1 });
        //     // }
        // },

    },

})

export const {
    fetchProductsStart,
    fetchProductsSuccess,
    fetchProductsFailure,
} = productSlice.actions;


export const fetchProducts = () => async (dispatch) => {
    try {
        dispatch(fetchProductsStart());
        const response = await axios.get('http://localhost:4000/api/products/');
        dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
        dispatch(fetchProductsFailure(error.message));
    }
};
export default productSlice.reducer