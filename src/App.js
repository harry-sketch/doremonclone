import React from 'react'
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Showcase from './Components/Showcase';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Home/>
      <Showcase/>
      <Footer/>
    </div>
  )
}

export default App
