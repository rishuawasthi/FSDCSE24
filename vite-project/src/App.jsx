import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import ICard from './components/ICard'
import './App.css'
import ICardGallery from './components/ICardGallery'

function App() {
  

  return (
    <div style={{color:'pink',background:'lightblue',border:"2px solid red",width:"600px"}}>
      <h2 style={{margin:' 100px 0px'}}>Welcome To React App Development</h2>
      <ICardGallery/>
      </div>

  )
}

export default App
