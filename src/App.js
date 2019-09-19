import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Education from './components/Education';
import Exp from './components/Experience'
import Skills from './components/Skills';
import Projects from './components/Projects';

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
    
    ///////////////////////////////////
    // <div id="colorlib-page">
    //   <div id="container-wrap">
    //     <Sidebar></Sidebar>
    //       <div id="colorlib-main">
            
    //       </div>
    //   </div>
    // </div>
    ///////////////////////////////////
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
