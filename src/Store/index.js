import reducer1 from './Reducers/reducer1';
import {configureStore} from '@reduxjs/toolkit';
const store=configureStore({
    reducer:reducer1
});
export default store;