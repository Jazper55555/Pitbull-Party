import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown'

// function NavBar() {
//     return (
//         <nav>
//             <NavLink to='/home' className='nav-link'>Home</NavLink>
//             <br></br>
//             <NavLink to='/about' className='nav-link'>About</NavLink>
//             <br></br>
//             <NavLink to='/pits' className='nav-link'>Pits</NavLink>
//             <br></br>
//             <NavLink to='/pitgenerator' className='nav-link'>Pit Generator</NavLink>
//         </nav>
//     )
// }

function NavBar() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        console.log(open)
    }, [open])

    function handleDropdown() {
        setOpen(!open)
    }

    // const home = <NavLink to='/home' className='nav-link'>Home</NavLink>
    // const about = <NavLink to='/about' className='nav-link'>About</NavLink>
    // const pits = <NavLink to='/pits' className='nav-link'>Pits</NavLink>
    // const pitGenerator = <NavLink to='/pitgenerator' className='nav-link'>Pit Generator</NavLink>

    return (
    <Dropdown id="dropdown-basic-button" title="Menu" onClick={handleDropdown}>
        <Dropdown.Toggle id="dropdown-basic">Menu</Dropdown.Toggle>
        {open &&
        <Dropdown.Menu className="nav-link">
            <Dropdown.Item as={NavLink} to='/' className="nav-link">Home</Dropdown.Item>
            <br></br>
            <Dropdown.Item as={NavLink} to='/about' className="nav-link">About</Dropdown.Item>
            <br></br>
            <Dropdown.Item as={NavLink} to='/pits' className="nav-link">Pits</Dropdown.Item>
            <br></br>
            <Dropdown.Item as={NavLink} to='/pitgenerator' className="nav-link">Pit Generator</Dropdown.Item>
        </Dropdown.Menu>
        }   
    </Dropdown>
    )
}

export default NavBar

// App
  // NavBar
  // About
  // PitGenerator
  // Pits
    // PitCard