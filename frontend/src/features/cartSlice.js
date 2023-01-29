import { createSlice } from "@reduxjs/toolkit";

initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
});
