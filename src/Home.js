import './App.css';
import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { NavLink } from 'react-router-dom';

function Home() {

  const backgroundImage = <div
      style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "120%",
      backgroundImage: `url("https://www.creativefabrica.com/wp-content/uploads/2023/05/04/Pitbull-Whimsical-watercolor-background-Graphics-68822601-3-580x387.jpg")`,
      opacity: 0.15,
      zIndex: -1,
    }}>
    </div>

  return (
    <div className="App">
      {backgroundImage}
      <header className="App-header">
        <h1>Welcome to Pitbull Party!</h1>
        <h4>Here, you will find all things PITBULL <br/>
        <br></br>
          Click the menu below to browse the world of pitties and all the fun they have to offer
        </h4>
      </header>
      <main className='App-main'>
      <Dropdown id="dropdown-basic-button" title="Menu">
        {/* <Dropdown.Toggle id="dropdown-basic">Menu</Dropdown.Toggle> */}
        <Dropdown.Menu className='dropdown-menu' show='true'>
            <Dropdown.Item as={NavLink} to='/' className='App-menu'>Home</Dropdown.Item>
            <br></br>
            <Dropdown.Item as={NavLink} to='/about' className='App-menu'>About</Dropdown.Item>
            <br></br>
            <Dropdown.Item as={NavLink} to='/pits' className='App-menu'>Pits</Dropdown.Item>
            <br></br>
            <Dropdown.Item as={NavLink} to='/pitgenerator' className='App-menu'>Pit Generator</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
      </main>
    </div>
  );
}

export default Home;

// Home
  // NavBar
  // About
  // PitGenerator
  // Pits
    // PitCard