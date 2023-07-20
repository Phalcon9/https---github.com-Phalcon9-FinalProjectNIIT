import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // state.push(action.payload)   
            // const productToAdd = action.payload;
            // const existingProduct = state.find((product) => product.id === productToAdd.id);
      
            // if (existingProduct) {
            //     state.map((item) => (item._id === productToAdd._id ? { ...item, qty: item.qty + 1 } : item));
            //   } else {
            //     state.push({ ...productToAdd, qty: 1 });
            //   }


              const productToAdd = action.payload;
              const existingProduct = state.find((item) => item._id === productToAdd._id);
        
              if (existingProduct) {
                return state.map((item) => (item._id === productToAdd._id ? { ...item, qty: item.qty + 1 } : item));
              } else {
                return [...state, { ...productToAdd, qty: 1 }];
              }
            // if (existingProduct) {
            //   // If the product already exists in the cart, increase its quantity
            //   existingProduct.qty += 1;
            // } else {
            //   // If the product is not in the cart, add it with a quantity of 1
            //   state.push({ ...productToAdd, qty: 1 });
            // }
        },
    }
})
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer