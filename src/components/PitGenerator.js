import React, { useEffect, useState } from 'react'

function PitGenerator() {
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')
    const [weight, setWeight] = useState('')
    const [snack, setSnack] = useState('')
    const [image, setImage] = useState('')

    const backgroundImage = <div
    style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "120%",
    backgroundImage: `url("https://img.freepik.com/premium-vector/vector-cartoon-cute-pitbull-terrier-dog-seamless-pattern-background_52569-2140.jpg")`,
    opacity: 0.2,
    zIndex: -1,
  }}>
  </div>

  function handleName(e) {
    setName(e.target.value)
  }

  function handleNickname(e) {
    setNickname(e.target.value)
  }

  function handleWeight(e) {
    setWeight(e.target.value)
  }

  function handleSnack(e) {
    setSnack(e.target.value)
  }

  useEffect(() => {
    fetch('https://dog.ceo/api/breed/bullterrier/images/random')
    .then(r => r.json())
    .then(data => setImage(data.message))
}, [image])

  function handleSubmit(e) {
    e.preventDefault()
    
    fetch('https://phase-2-project-json-server-vifp.onrender.com/dogs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            nickname: nickname,
            image: image,
            weight: weight,
            snack: snack
        })
    })
    .then(r => r.json())
    .then(data => console.log(data))
}

    return (
        <>
        {backgroundImage}
          <header className='App-header'>
          <h1>Pit Generator</h1>
          <h4>Fill out the fields below, click submit, and we will generate a custom Pitbull Card just for you!</h4>
          </header>
          <main>
            <br></br>
            <br></br>
          <form className='App-menu' onSubmit={handleSubmit}>
            <input type='text' placeholder='Name' value={name} onChange={handleName}></input>
            <br></br>
            <input type='text' placeholder='Nickname' value={nickname} onChange={handleNickname}></input>
            <br></br>
            <input type='text' placeholder='Weight' value={weight} onChange={handleWeight}></input>
            <br></br>
            <input type='text' placeholder='Favorite Snack' value={snack} onChange={handleSnack}></input>
            <br></br>
            <button type='submit'>Submit</button>
          </form>
          </main>
        </>
      );
}

export default PitGenerator

// App
  // NavBar
  // About
  // PitGenerator
  // Pits
    // PitCard