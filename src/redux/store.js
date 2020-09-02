//import
import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import userReducer,{restoreSessionAction} from './userDuck'
import userNew from './userNew'
import charReducer,{getCharacterAction} from './charactersDuck'
import thunk from 'redux-thunk'
//

let rootReducers=combineReducers({
    user:userReducer,
    userNew:userNew,
    characters:charReducer
})
//el navegador soporta las herramientas de desarrollo
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    let store=createStore(
        rootReducers,
        composeEnhancers(applyMiddleware(thunk)))
    getCharacterAction()(store.dispatch,store.getState)
    restoreSessionAction()(store.dispatch)
    return store
}
