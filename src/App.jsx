import React from "react";
import Home from"./components/Home";
import Education from "./components/Education";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Data from "./components/Data"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

function App(){
  return(
    <>
    <Nav/>
   <Home/>
   <About/>
   <Education/>
   <Skills/>
   <Contact/>
   <Footer/>


   

   </> 
  )
}
export default App;
