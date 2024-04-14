import './App.css';
import NavBar from './components/NavBar'
import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { NavLink } from 'react-router-dom';

function App() {
  const [dogs, setDogs] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    fetch('https://phase-2-project-json-server-vifp.onrender.com/dogs')
    .then(r => r.json())
    .then(data => setDogs(data))
  }, [])

  function handleDropdown() {
    setOpen(!open)
  }
  return (
    <div className="App">
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "120%",
          backgroundImage: `url("https://www.creativefabrica.com/wp-content/uploads/2023/05/04/Pitbull-Whimsical-watercolor-background-Graphics-68822601-3-580x387.jpg")`,
          opacity: 0.2,
          zIndex: -1,
      }}></div>

      <header className="App-header">
        <h1>Welcome to Pitbull Party!</h1>
        <h4>Here, you will find all things PITBULL <br/>
        <br></br>
          Click the menu below to browse the world of pitties and all the fun they have to offer
        </h4>
      </header>
      <main className='App-main'>
      <Dropdown id="dropdown-basic-button" title="Menu" onClick={handleDropdown}>
        <Dropdown.Toggle id="dropdown-basic">Menu</Dropdown.Toggle>
        {open &&
        <Dropdown.Menu className='dropdown-menu'>
            <Dropdown.Item as={NavLink} to='/' className='App-menu'>Home</Dropdown.Item>
            <br></br>
            <Dropdown.Item as={NavLink} to='/about' className='App-menu'>About</Dropdown.Item>
            <br></br>
            <Dropdown.Item as={NavLink} to='/pits' className='App-menu'>Pits</Dropdown.Item>
            <br></br>
            <Dropdown.Item as={NavLink} to='/pitgenerator' className='App-menu'>Pit Generator</Dropdown.Item>
        </Dropdown.Menu>
        }
    </Dropdown>
      </main>
    </div>
  );
}

export default App;

// App
  // NavBar
  // About
  // PitGenerator
  // Pits
    // PitCard