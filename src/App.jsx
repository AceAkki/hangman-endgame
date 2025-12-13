import { useEffect, useState } from 'react'
import './App.css'

import Header from '../components/Header'
import languages from './languages'
import { nanoid } from 'nanoid'

function App() {
  let [currentWord, setCurrentWord] = useState("react");

  function flipEnter(event) {
    let {backgroundColor, color} = window.getComputedStyle(event.target);
    event.target.style.backgroundColor = color;
    event.target.style.color = backgroundColor;
  }

  function flipLeave(lang) {
    event.target.style.backgroundColor = lang.background; 
    event.target.style.color = lang.color
  }

  function loadPuzzle() {
    let puzzleWord = Array.from(currentWord).map(char => {
      return <span className='puzzle-char' key={nanoid()}> {char} </span>
    })
    return puzzleWord
  }

  function createKeyboard() {
   const lowercase = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
   let keys = lowercase.map(char => {
    return <button key={nanoid()} className='char-key'> {char} </button>
   })
   return keys
  }

  let langChips = languages.map(lang => {
    let styles = {background:lang.background, color:lang.color}
    return <div key={lang.name} className='lang'style={styles} aria-description={lang.text} onMouseEnter={flipEnter} onMouseLeave={() => flipLeave(lang)}> {lang.name} </div>
  })

  return (
    <>
      <Header />
      <main>
        <div className='status-text'>
          <p>
            You won ! Well Done.
          </p>
        </div>
        <section className='languages-chips'>
          {langChips}
        </section>
        <section className='puzzle-txt-wrap'>
          {loadPuzzle()}
        </section>
        <section className='keyboard-wrap'>
          {createKeyboard()}
        </section>
        <button className='newgame-btn'> New Game</button>

      </main>
    </>
  )
}

export default App

/*
  langs
  word 
  keyboard colors

  input event 
*/