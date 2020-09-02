
import {loginWithGoogle,signOutGoogle} from '../firebase'

////constants

let initialData={
    loggetIn:false,
    Name:"Hola Soy Pepe rojas",
    feching:false,

}

let LOGGIN_SUCCES="LOGGIN_SUCCES"
let LOGGIN_ERROR="LOGGIN_ERROR"
let LOG_OUT="LOG_OUT"
let LOGIN="LOGIN"

////Reducer
 export default function reducer(state=initialData,action){
    switch(action.type){
        case LOG_OUT:
            return {...initialData}
        case LOGGIN_ERROR:
            return {feching:false,...state,error:action.payload}
        case LOGIN:
            return {feching:true,...state}
        case LOGGIN_SUCCES:
            return {...state,feching:false,...action.payload,loggetIn:true}
        default:
            return state
    }
 }
/// Aux

function saveStorage(storage){
    localStorage.storage=JSON.stringify(storage)
}
 
// /Actions
export let logOutAction=()=>(dispatch,getState)=>{
    signOutGoogle()
    dispatch({
        type:LOG_OUT
    })
    localStorage.removeItem('storage')

}
export let restoreSessionAction=()=>(dispatch)=>{
    let storage=localStorage.getItem('storage')
    storage=JSON.parse(storage)//es el inverso del stringify para el texto se onvierta en un objeto
    if(storage&&storage.user){
        dispatch({
            type:LOGGIN_SUCCES,
            payload:storage.user
        })
    }

}

export let doGoogleLoginAction=()=>(dispatch,getState)=>{
     return loginWithGoogle()
        .then(user=>{

            dispatch({
                type:LOGGIN_SUCCES,
                payload:{
                    uid:user.uid,
                    name:user.displayName,
                    email:user.email,
                    pothonURL:user.photoURL
                }
            })
            saveStorage(getState())
        })
        .catch(err=>{
            console.log(err)
            dispatch({
                type:LOGGIN_ERROR,
                payload:err.message
            })

        })
 }
