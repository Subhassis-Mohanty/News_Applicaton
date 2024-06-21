import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Footer from './components/Footer';
import FetchData from './components/FetchData';


const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path='/home' element= {<Home/>}/>
        <Route exact path='/general' element= {< FetchData catagory = "general" />}/>
        <Route exact path='/business' element= {< FetchData catagory = "business" />}/>
        <Route exact path='/entertainment' element= {< FetchData catagory = "entertainment" />}/>
        <Route exact path='/health' element= {< FetchData catagory = "health" />}/>
        <Route exact path='/science' element= {< FetchData catagory = "science" />}/>
        <Route exact path='/sports' element= {< FetchData catagory = "sports" />}/>
        <Route exact path='/technology' element= {< FetchData catagory = "technology" />}/>
      </Routes>
      <Footer/>
    </Router>
    
    </>
  )
}

export default App