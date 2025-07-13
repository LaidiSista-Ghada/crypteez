import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'
import Hero from './Hero'
import Mobile from './Mobile'
import Tabs from './Tabs' 
import Prices from './Prices'
import Columns from './columns'
import Questions from './Questions'

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <Mobile />
      <Tabs />
      <Prices />
      <Columns />
      <Questions />
    </>
  )
}

export default App
