import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import Header from './components/header/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/about/about';
import MySpecialities from './components/mySpecialities/mySpecialities';
import MyWork from './components/myWork/myWork';
import Services from './components/services/services';
import Contact from './components/contact/contact';
import Project from './components/projects/project';
import Footer from './components/footer/footer';

function App() {
  return (<>
    <NavBar />
    <Header />
    <About />
    <MySpecialities />
    <MyWork />
    <Services />
    <Project />
    <Contact />
    <Footer />
  </>);
}

export default App;
