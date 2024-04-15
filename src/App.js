import NavBar from './components/NavBar'
import {Outlet} from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
    const [dogs, setDogs] = useState([])

    useEffect(() => {
        fetch('https://phase-2-project-json-server-vifp.onrender.com/dogs')
        .then(r => r.json())
        .then(data => setDogs(data))
        .catch(error => console.error(error))
      }, [])

    return (
        <>
        <header>
            <NavBar/>
        </header>
        <Outlet context={dogs}/>
        </>
    )
}

export default App