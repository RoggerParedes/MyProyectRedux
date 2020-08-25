//import
import {createStorage,combineReducers,compose,applyMiddleware} from 'redux'
import userReducer from './userDuck'
import userNew from './userNew'
import thunk from 'redux-thunk'
//

let rootReducers=combineReducers({
    user:userReducer,
    userNew:userNew
})
//el navegador soporta las herramientas de desarrollo
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    let store=createStorage(
        rootReducers,
        composeEnhancers(applyMiddleware(thunk)))
    return store
}
