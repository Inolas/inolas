import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div id="page-top">
    <div id="sideNav">
      <Sidebar></Sidebar>
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
