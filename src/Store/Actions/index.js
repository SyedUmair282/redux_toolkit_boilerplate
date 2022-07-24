// old method of action with installation of redux thunk
// const set_data=(data)=>{
//     return(dispatch)=>{
//         dispatch({
//             type:"UPDATE",
//             payload:data
//         })

//     }
// }
// export{
//     set_data
// }


// new method of action witouut redux thunk installation
import { createAction } from '@reduxjs/toolkit'

//for only simple dispatch action have only one parameter called type of action
const set_data = createAction('UPDATE')

//for async dispatch action redux toolkit by default have redux thunk
const fetch_data = () => {
    return async(dispatch) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await res.json()
        dispatch({
            type: "FETCH",
            payload: result
        })

    }
}

export {
    set_data,
    fetch_data
}