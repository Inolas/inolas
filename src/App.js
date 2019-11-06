import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Education from './components/Education';
import Exp from './components/Experience'
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Certi from './components/Cerificates';

function App() {
  return (
    <div id="page-top">
    <div id="sideNav">
      <Sidebar></Sidebar>
    </div>
    <div>
      <About></About>
      <Education></Education>
      <Exp></Exp>
      <Skills></Skills>
      <Projects></Projects>
      
    </div>

    </div>
  );
}

export default App;
