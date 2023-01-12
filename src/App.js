import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import Header from './components/header/header';
import About from './components/about/about';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MySpecialities from './components/mySpecialities/mySpecialities';
import MyWork from './components/myWork/myWork';
import Services from './components/services/services';
import Contact from './components/contact/contact';
import Gallery from './components/gallery/gallery';
import Footer from './components/footer/footer';

function App() {
  return (<>
    <NavBar />
    <Header />
    <About />
    <MySpecialities />
    <MyWork />
    <Gallery />
    <Services />
    <Contact />
    <Footer />
  </>);
}

export default App;
