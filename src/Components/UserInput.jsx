import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/userName.slice';
import '../UserInput.css'
import Pokedexlogo from '../assets/PokedexLogo.png'
import Footer from './Footer';
const UserInput = () => {

    const [userName, setUserName] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const dispatchUserName = () => {
        dispatch(changeName(userName))
        navigate("/Pokedex")
    }

    return (
        <div className='input'>
            <div className='input-box'>
                <img src={Pokedexlogo} alt="" className='pokeLogo'/>
                <h1 className='input-Title'>¡Hello Trainer!</h1>
                <h3 className='input-Message'>To continue, give me your name</h3>
                <input type="text" value={userName} onChange={e => setUserName(e.target.value)} className='userInput' />
                <button type='button' onClick={dispatchUserName} className='userButton'>Send</button>
            </div>
            <Footer />
        </div>
    );
};

export default UserInput;