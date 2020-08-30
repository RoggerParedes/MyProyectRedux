import axios from 'axios'
//constants

//import reducer from "./userDuck"

let initialData={
    feching:false ,//me indica si los personajes estan cargando,
    array:[],//aca estaran los personnajes traidos desde la url
    current:{},//aca iremos colocando cada personaje actual,
    error:false
}



let URL = "https://rickandmortyapi.com/api/character"
let GET_CHARACTERS="GET_CHARACTER"//acciin de solicitar
let GET_CHARACTER_SUCCESS="GET_CHARACTER_SUCCESS"
let GET_CHARACTER_ERROR="GET_CHARACTER_ERROR"
let REMOVE_CHARACTERS="REMOVE_CHARACTERS"
//reducer

export default function reducer(state=initialData,action){
    switch(action.type){
        case REMOVE_CHARACTERS:
            return {...state,array:action.payload}
        case GET_CHARACTERS:
            return {...state,feching:true}
        case GET_CHARACTER_SUCCESS:
            //payload conjunto de datos transmitidos
            return {...state,array:action.payload,feching:false}
        case GET_CHARACTER_ERROR:
            return {...state,feching:false,error:action.payload,error:true}
        default:
            return state
    }
}


///store todo los educer juntos
///state es un reducer dentro del store

//action son las encargadas de comunicarse con el servidor

    //dis:ejecuta las acciones
    //get:te entraga el state en caso lo necesit
    //el dispach y el get viven en el store.js
    //stasfunciones decuelven otra funcion

export let getCharacterAction=()=>(dispatch,getState)=>{
    dispatch({
        type:GET_CHARACTERS
    })
    return axios.get(URL)
    .then(res=>{
        dispatch({
            type:GET_CHARACTER_SUCCESS,
            payload:res.data.results
        })
    })
    .catch(error=>{
        dispatch({
            type:GET_CHARACTER_ERROR,
            payload:error.response.message
        })
    })
}

export let removeCharacterAction=()=>(distpach,getState)=>{
    //¡¿donde estan los personajes 
    let {array}=getState().characters 
    array.shift()
    distpach({
        type:REMOVE_CHARACTERS,
        payload:[...array]
    })
}

/*esport fucntion getCharacterAction(){
    return (distpach,getState)=>{

    }
}*/