import React from 'react';
import pokedexLogo from '../assets/Pokedexlogo.png'
import '../NavBar.css'
const NavBar = () => {
    return (
        <header>
            <nav className='navBar'>
                <div className='navAccent'>
                    <img src={pokedexLogo} alt="" className='logo' />
                </div>
                <div className='btn-Wrapper'>
                    <button className='nav-Btn'></button>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;