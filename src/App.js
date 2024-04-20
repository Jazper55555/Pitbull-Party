import NavBar from './components/NavBar'
import {Outlet} from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
    const [dogs, setDogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/dogs')
        .then(r => r.json())
        .then(data => setDogs(data))
        .catch(error => console.error(error))
      }, [dogs])

    const contextData = {
        dogs: dogs, 
        handleUpdate: handleUpdate
    }

    function handleUpdate(obj) {
        const updatedDogs = [...dogs, obj]
        setDogs(updatedDogs)
    }

    return (
        <>
        <header>
            <NavBar/>
        </header>
        <Outlet context={contextData}/>
        </>
    )
}

export default App