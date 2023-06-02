import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { reducer } from './reducer.ts';


const store = configureStore({
  reducer: reducer
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export function useAppDispatch() {
  return useDispatch<AppDispatch>();
}


export default store;
