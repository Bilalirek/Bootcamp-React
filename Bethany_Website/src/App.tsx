// import { useState } from 'react'
import NavBar from './Components/NavBar'
import Fotter from './Components/Footer'
import Text from './Components/Text'
import BethanyJonesPic from "./images/BethanyJones-pic.png"

import './App.css'


function Page() {
  return (
    <>
    <NavBar />
    <div className='mainContener'>
      <div className='contener'>
      <Text />
      <Fotter />
      </div>
        <div>
        <img src={BethanyJonesPic} alt="Bethany Jones Picture" 
        style={{width:"450px",height:"400px"}} />
        </div>
      
    </div>
    </>
  )
}

function App() {
  return (
   <Page />
  )
}

export default App
