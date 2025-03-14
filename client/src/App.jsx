import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer/Footer'
import FAQ from './pages/FAQ'
import Project from './pages/Project'
import Gallery from './pages/Gallery'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
