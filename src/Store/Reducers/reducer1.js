import { createReducer, createSlice } from '@reduxjs/toolkit'
import { useReducer } from 'react';
const intialState = {
        name: "umair",
        age: 30,
        class: "Bachelor"
    }
    //Old redux formate
    // export default (state=intialState,action)=>{
    //     if(action.type=='UPDATE'){
    //         return{
    //             ...state,
    //             name:action.payload
    //         }
    //     }
    //     return state;
    // }

//new redux_toolkit_format.dont have switch and if conditions, dont use ...state,it get all state himself
//return krne se bach gaye
// export default createReducer(intialState, (builder) => {
//     builder.addCase('UPDATE', (state, action) => {
//         state.name = action.payload
//     })
//     builder.addCase('FETCH', (state, action) => {
//         state.class = action.payload
//     })
// })

//create slice have reducer and action in one file like below:

const userReducer = createSlice({
    name: "person",
    initialState: intialState,
    reducers: {
        Update(state, action) {
            state.name = action.payload
        }
    }
})
export const { Update } = userReducer.actions
export default userReducer.reducer;