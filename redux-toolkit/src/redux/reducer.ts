import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './productReducer';
import cartReducer from './cartReducer';

export const reducer = combineReducers({
  product: productReducer,
  cart: cartReducer
});
