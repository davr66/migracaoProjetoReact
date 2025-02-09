import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import NewsSection from './sections/news/NewsSection'
import HomeSection from './sections/home/HomeSection'
import VideosSection from './sections/videos/VideosSection'
import ExpertsSection from './sections/experts/ExpertsSection'
import ContactSection from './sections/contact/ContactSection'


function App() {

  return (
    <>
      <NavBar></NavBar>
      <HomeSection></HomeSection>
      <NewsSection></NewsSection>
      <VideosSection></VideosSection>
      <ExpertsSection></ExpertsSection>
      <ContactSection></ContactSection>
      <Footer></Footer> 
    </>
  )
}

export default App
