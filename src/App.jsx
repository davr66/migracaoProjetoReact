import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import NewsSection from './NewsSection'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <NewsSection></NewsSection>
      <Footer></Footer> 
    </>
  )
}

export default App
