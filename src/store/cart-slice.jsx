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
      let selectedProduct =
        state.products.find(
          (item) => item.id === product.id && item.size === size
        ) || null;

      // const sizeExist = state.product.find(item=> item.id === product.id && item.size === product.size)

      state.totalPrice += product.price;
      state.totalAmount++;

      // CHECK IF PRODUCT EXIST
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

        console.log('added');
        if (!sizeExists) {
          productExists.pickedSize.push(size);
          state.products.push({
            ...product,
            totalAmount: 1,
            totalPrice: product.price,
            size,
            pickedSize: [size],
          });

          return;
        }

        // INCREASE THE AMOUNT AND CALCULATE THE PRICE
        if (selectedProduct) {
          selectedProduct.totalAmount++;
          selectedProduct.totalPrice += product.price;
        } else {
          productExists.totalAmount++;
          productExists.totalPrice += product.price;
        }
      }
    },

    removeItem(state, action) {
      const id = action.payload.id;
      const size = action.payload.size;
      console.log(id, size);

      //   CHECK IF THE ITEM EXIST ALSO GET THE ITEM
      const theItem = state.products.find(
        (product) => product.id === id && product.size === size
      );

      state.totalPrice -= theItem.price;
      state.totalAmount--;

      if (theItem.totalAmount === 1) {
        const itemWillRemove = state.products.find(
          (product) => product.id === id && product.size === size
        );
        const indexOfRemoveItem = state.products.indexOf(itemWillRemove);
        state.products.splice(indexOfRemoveItem, 1);
      } else {
        theItem.totalAmount--;
        theItem.totalPrice -= theItem.price;
      }
    },
    removeInstant(state, action) {
      const id = action.payload.id;
      const size = action.payload.size;
      console.log(id, size);

      //   CHECK IF THE ITEM EXIST ALSO GET THE ITEM
      const itemWillRemove = state.products.find(
        (product) => product.id === id && product.size === size
      );
      state.totalPrice -= itemWillRemove.totalPrice;
      state.totalAmount -= itemWillRemove.totalAmount;

      const indexOfRemoveItem = state.products.indexOf(itemWillRemove);
      state.products.splice(indexOfRemoveItem, 1);
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;
