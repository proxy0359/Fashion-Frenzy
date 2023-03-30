import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { totalPrice: 0, totalAmount: 0, products: [] },
  reducers: {
    addItem(state, action) {
      const product = action.payload;
      state.totalPrice += product.price;
      state.totalAmount += 1;
      const productExists = state.products.find(
        (item) => item.id === product.id
      );

      if (!productExists) {
        state.products.push({
          ...product,
          totalAmount: 1,
          totalPrice: product.price,
        });
      } else {
        productExists.totalAmount += 1;
        productExists.totalPrice += productExists.price;
      }
    },

    removeItem(state, action) {
      const id = action.payload;

      //   CHECK IF THE ITEM EXIST ALSO GET THE ITEM
      const theItem = state.products.find((product) => product.id === id);

      state.totalPrice -= theItem.price;
      state.totalAmount -= 1;

      if (theItem.totalAmount === 1) {
        state.products = state.products.filter((product) => product.id !== id);
      } else {
        theItem.totalAmount -= 1;
        theItem.totalPrice -= theItem.price;
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;
