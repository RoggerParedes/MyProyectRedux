import React from 'react'
import styles from './login.module.css'
import {connect} from 'react-redux'
import {doGoogleLoginAction,logOutAction} from '../../redux/userDuck'

function LoginPage({logOutAction,loggetIn,feching,doGoogleLoginAction}) {

    function doLogin(){
        doGoogleLoginAction()
    }

    function logOut(){
        logOutAction()
    }
    if(feching){
        return <h2>Cargado..</h2>
    }

    return (
        <div className={styles.container}>

            {loggetIn ? <h1>
                Cierra tu sesión
            </h1> : <h1>
                Inicia Sesión con Google
            </h1>}

            {loggetIn ? <button onClick={logOut}>
                Cerrar Sesión
            </button>:<button onClick={doLogin}>
                Iniciar
            </button>}
            </div>
    )
}

function mapState(state){

    return {
        feching:state.user.feching,
        loggetIn:state.user.loggetIn
    }
}

export default connect(mapState,{doGoogleLoginAction,logOutAction})(LoginPage)