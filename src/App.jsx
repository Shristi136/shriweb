import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Hnav } from './components/Header';
import { Hero } from './components/Herosection';

const App=()=>{
  

  return (
    <>
    <Router>
      <Hnav/>
      <Routes>
      <Route path="/" element={<Hero/>} />
      </Routes>

    </Router>
      
    </>
  )
}

export default App
