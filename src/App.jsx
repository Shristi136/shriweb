import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Hnav } from './components/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import {Contact} from './components/Contact';


const App=()=>{
  

  return (
    <>
    <Router>
      <Hnav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path="/portfolio" element={Portfolio} /> */}
        {/* <Route path="/skills" element={Skills} /> */}
        <Route path="/Contact" element={<Contact/>} />

      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
