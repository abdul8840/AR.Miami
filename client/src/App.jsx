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
import RTRConstruction from './pages/services/RTRConstruction'
import IDR from './pages/services/IDR'
import HRR from './pages/services/HRR'
import PM from './pages/services/PM'

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

        <Route path="/services/roof-to-roof-construction" element={<RTRConstruction />} />
        <Route path="/services/interior-design-and-Remodeling" element={<IDR />} />
        <Route path="/services/house-remodeling-and-renovations" element={<HRR />} />
        <Route path="/services/property-management" element={<PM />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
