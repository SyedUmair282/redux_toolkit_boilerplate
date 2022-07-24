import userReducer from './Reducers/reducer1';
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
    reducer: userReducer
});
export default store;