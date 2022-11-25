import React from 'react'
import './Header.css';
import Troll from './images/troll-face.png';

const Header = () => {
    return (
        <header className="header">
            <img
                src={Troll}
                className="header--image"
                alt='logo-here'
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Welcome to our World of Memes</h4>
        </header>
    )
}

export default Header