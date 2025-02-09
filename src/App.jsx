import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import NewsSection from './sections/news/NewsSection'
import HomeSection from './sections/home/HomeSection'
import VideosSection from './sections/videos/VideosSection'
import ExpertsSection from './sections/experts/ExpertsSection'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <HomeSection></HomeSection>
      <NewsSection></NewsSection>
      <VideosSection></VideosSection>
      <ExpertsSection></ExpertsSection>
      <Footer></Footer> 
    </>
  )
}

export default App
