const set_data=(data)=>{
    return(dispatch)=>{
        dispatch({
            type:"UPDATE",
            payload:data
        })
        
    }
}
export{
    set_data
}