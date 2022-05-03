import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import reducer from './modules';

const makeStore = () =>
  configureStore({
    reducer,
    middleware: [],
    devTools: process.env.NODE_ENV !== 'production',
  });

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});
