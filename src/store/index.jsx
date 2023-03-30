import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: { cart: null },
});

export default store;
