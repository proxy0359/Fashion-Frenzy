import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { totalPrice: 0, totalAmount: 0, products: [] },
  reducers: {
    addItem(state, action) {
      const product = action.payload.product;
      const size = action.payload.size;
      const productExists = state.products.find(
        (item) => item.id === product.id
      );

      // const sizeExist = state.product.find(item=> item.id === product.id && item.size === product.size)

      console.log(state.products);
      state.totalPrice += product.price;
      state.totalAmount++;

      if (!productExists) {
        console.log('push');
        state.products.push({
          ...product,
          totalAmount: 1,
          totalPrice: product.price,
          size,
          pickedSize: [size],
        });
      } else {
        const sizeExists = productExists.pickedSize.find(
          (item) => item === size
        );
        if (!sizeExists) {
          productExists.pickedSize.push(size);
          state.products.push({
            ...product,
            totalAmount: 1,
            totalPrice: product.price,
            size,

            id: nanoid(),
          });
        }
        productExists.totalAmount++;
        productExists.totalPrice += productExists.price;
      }
    },

    removeItem(state, action) {
      const id = action.payload;

      //   CHECK IF THE ITEM EXIST ALSO GET THE ITEM
      const theItem = state.products.find((product) => product.id === id);

      state.totalPrice -= theItem.price;
      state.totalAmount--;

      if (theItem.totalAmount === 1) {
        state.products = state.products.filter((product) => product.id !== id);
      } else {
        theItem.totalAmount--;
        theItem.totalPrice -= theItem.price;
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;
