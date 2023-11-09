import { createSlice } from "@reduxjs/toolkit";
import {fakedata} from '../data'
const initialState = {
  cart: [],
  items: fakedata,
  totalquantity: 0,
  totalamount: 0,
};


export const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }

      // Update totalamount and totalquantity
      state.totalquantity = state.cart.reduce((total, item) => total + item.quantity, 0);
      state.totalamount = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },

    plusbutton: (state, action) => {
      let idd = state.cart.findIndex((item) => item.id === action.payload.id);
      state.cart[idd].quantity += 1;

      // Update totalamount and totalquantity
      state.totalquantity = state.cart.reduce((total, item) => total + item.quantity, 0);
      state.totalamount = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },

    minusbutton: (state, action) => {
      let iddd = state.cart.findIndex((item) => item.id === action.payload.id);
      if (state.cart[iddd].quantity > 0) {
        state.cart[iddd].quantity -= 1;
      }

      // Update totalamount and totalquantity
      state.totalquantity = state.cart.reduce((total, item) => total + item.quantity, 0);
      state.totalamount = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
});

export default cartslice.reducer;

export const { addtocart,plusbutton,minusbutton} = cartslice.actions;