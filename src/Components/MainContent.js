import React, { useState } from 'react'
import memesData from './memesData';
import './MainContent.css';

const MainContent = () => {

  const [memeImage, setMemeImage] = useState("")

  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomNumber].url)

  }

  return (
    <main>
      <div className="form">
        <button
          className="form--button"
          onClick={getMemeImage}
        >
          Click here to get new meme
        </button>
      </div>
      <img src={memeImage} className="meme--image" alt='Meme-image'/>
    </main>
  )
}

export default MainContent