import { createSlice } from '@reduxjs/toolkit';

const UiSlice = createSlice({
  name: 'ui',
  initialState: { showCart: false },
  reducers: {
    toggleCart(state, action) {
      if (!action.payload) {
        console.log('asdfasdf');
        state.showCart = !state.showCart;
      } else {
        state.showCart = action.payload.bool;
      }
    },
  },
});

export const UiAction = UiSlice.actions;

export default UiSlice;
