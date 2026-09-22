import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import ICard from './components/ICard'
import './App.css'
import ICardGallery from './components/ICardGallery'
import Mystate from './components/Mystate'
import ColorChange from './components/ColorChange'

function App() {
  

  return (
    <div>
       {/* <h2 style={{margin:' 100px 0px'}}>Welcome To React App Development</h2>  */}
       {/* <ICardGallery/>  */}

      {/* <Mystate/> */}
      <ColorChange />
      </div>

  )
}

export default App
