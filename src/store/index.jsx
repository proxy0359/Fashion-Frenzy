import { configureStore } from '@reduxjs/toolkit';
import UiSlice from './ui-slice';
import cartSlice from './cart-slice';

const store = configureStore({
  reducer: { cart: cartSlice.reducer, ui: UiSlice.reducer },
});

export default store;
