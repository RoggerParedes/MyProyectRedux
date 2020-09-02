import React, { useState, useEffect } from 'react'
import Card from '../card/Card'
import styles from './home.module.css'
//import axios from 'axios'
import {connect} from 'react-redux'
import {removeCharacterAction,addToFavoriteAction} from '../../redux/charactersDuck'

//let URL = "https://rickandmortyapi.com/api"

 function Home({chars,removeCharacterAction,addToFavoriteAction}) {

   // let [chars, setChars] = useState([])

  /*  useEffect(() => {
        getCharacters()
    }, [])*/

   /* function nextChar() {
        chars.shift()
        if (!chars.length) {
            //get more characters
        }
        setChars([...chars])
    }*/

    /*function renderCharacter() {
        //let char = chars[0]
        return (
            <Card />
        )
    }*/

 /*   function getCharacters() {
        return axios.get(`${URL}/character`)
            .then(res => {
                setChars(res.data.results)
            })
    }*/

   /* return (
        <div className={styles.container}>
            <h2>Personajes de Rick y Morty</h2>
            <div>
                {renderCharacter()}
            </div>
        </div>
    )*/
    function renderCharacter() {
        let char = chars[0]
        return (
            <Card rightClick={addFavorite} leftClick={nextharacter} {...char}/>
        )
    }

    function addFavorite(){
        addToFavoriteAction()
    }

    function nextharacter(){
        removeCharacterAction() //le paso el distpach y el state por connect
    }


    return (
        <div className={styles.container}>
            <h2>Personajes de Rick y Morty</h2>
            <div >
                {renderCharacter()}
            </div>
        </div>
    )
}

function mapStateToProp(state){//funcion que recibe todo el state
    return {
        chars:state.characters.array
    }
}

export default connect(mapStateToProp,{removeCharacterAction,addToFavoriteAction})(Home)