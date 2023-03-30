import { createSlice } from '@reduxjs/toolkit';

const UiSlice = createSlice({
  name: 'ui',
  initialState: { showCart: false },
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const UiAction = UiSlice.actions;

export default UiSlice;
