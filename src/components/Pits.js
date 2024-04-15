import React from "react";
import PitCard from './PitCard'
import {useOutletContext} from 'react-router-dom'

function Pits() {
    const dogs = useOutletContext()

    const dogsMap = dogs.map((dog) => (
        <PitCard key={dog.id} id={dog.id} name={dog.name} image={dog.image} weight={dog.weight} nickname={dog.nickname} food={dog.food}/>
    ))

    const backgroundImage = <div 
        style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url("https://garden.spoonflower.com/c/9393283/p/f/l/QNylza-g5eS72u-4ZDPMsLjyKg4Qd8QVXO813snCEIOxv05sDPEnvkyP/100%25%20Kiss%20a%20bull%20-%20cute%20pit%20bull%20dog%20fabric%20-%20lips%20-%20love%20valentines%20-%20red%20and%20blue%20-%20LAD19.jpg")`,
        opacity: 0.1,
        zIndex: -1,}}>
    </div>

    return (
        <>
        {backgroundImage}
          <header>
          </header>
          <main>
            <h1>Pits</h1>
            {dogsMap}
          </main>
        </>
      );
}

export default Pits

// App
  // NavBar
  // About
  // PitGenerator
  // Pits
    // PitCard