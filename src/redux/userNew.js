

//constants

let initialState ={
    logged:false
}

let LOGIN="LOGIN"
let LOGOUT="LOGOUT"

//reducer

export default function reducer(state=initialState,action){
    switch(action.type){
        case    LOGIN:
        case    LOGOUT:
        default:
            return state
    }
}



//action


