import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Getaxios from './Components/getaxios'
import Postaxios from './Components/Postaxios'
import Putaxios from './Components/putaxios'
import Deleteaxios from './Components/deleteaxios'

function App() {

  return (
     <>
     <Deleteaxios />
     {/*<Putaxios />*/}
     {/*<Postaxios />*/}
     {/*<Getaxios />*/}
     </>
  )
}

export default App
