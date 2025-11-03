import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Head from './components/Head'
import Intro from './components/Intro'
import Projects from './components/Projects'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/head' element={<Head />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contacts />} />
          <Route path='/nav' element={<Navbar />} />
          <Route path='/skill' element={<Skills />} />
          <Route path='/intro' element={<Intro />} />
          <Route path='projects' element={<Projects />} />


        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
