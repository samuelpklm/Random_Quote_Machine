import { configureStore } from '@reduxjs/toolkit';
import cardReducucer from '../features/card/CardSlice';

export const store = configureStore({
  reducer: {
    mensaje: cardReducucer,
  },
});
