import React from 'react'
import Navbar from "./components/navbar/Navbar";
import Hero from  "./components/hero/Hero"
import Footer from "./components/footer/Footer"
import Features from './components/features/Features';
import SingUp from './components/singup/SingUp';

 
 

function App() {
  return (
    <>
 <Navbar/>
 <Hero/>
 <Features/>
 <SingUp/>
 <Footer/>

    </>
  );
}

export default App;
