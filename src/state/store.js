import { configureStore } from '@reduxjs/toolkit';
import shopingCartSlice from './ShopingCartSlice';

export const store = configureStore({
    reducer: {
    shopingCart: shopingCartSlice,
  },
});

export default store;