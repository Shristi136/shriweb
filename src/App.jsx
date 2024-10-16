import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Hnav } from './components/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';


const App=()=>{
  

  return (
    <>
    <Router>
      <Hnav/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
