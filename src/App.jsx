import { useState } from 'react'
import './App.css'
import Profile from './Componants/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './Componants/Hero';
import Skills from './Componants/Skill';
import Projects from './Componants/Project';
import Experience from './Componants/Education';
import Contact from './Componants/Contact';

function App() {
  return (
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<Profile />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
