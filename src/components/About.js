import React from "react";

function About() {

    const backgroundImage = <div
      style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url("https://img.freepik.com/premium-photo/colorful-dog-with-black-background-word-pit-bull-front_883148-465.jpg?w=1480")`,
      opacity: 0.2,
      zIndex: -1,
    }}>
    </div>

    return (
        <>
        {backgroundImage}
        <header>
            <h1 className="App-header">About</h1>
        </header>
          <main className="About-main">
            <p>Here at Pitbull Party, we love our animals. <br/>
            The Pitbull is really a misnomer for the American Staffordshire Terrier. <br/>
            They've recieved somewhat of a bad wrap the last few years and understandably so. <br/>
            Between sensationalized media coverage and the increase in Dog Fighting rings throughout the country, <br/>
            these wonderful creatures have been sterotyped beyond repair.</p>
            <p>There are, however, a LARGE number of proponents spreading the good word behind these amazing animals. <br/>
            Their loyalty, preeminently docile nature, and majestic demeanor make them perfect training pets. <br/>
            With proper training and guidance, there is no reason they cannot be just as well behaved and functioning <br/>
            as the most well trained pups.</p>
            <p>The goal is to find EVERY one of our lovable friends a home while letting the world know <br/>
            how amazing these creatures really are. <br/>
            Help us spread the word about our fun loving furry friends so they can experience as much love from the world <br/>
            as they offer to everyone everyday. <br/>
            Take a look around and let us know your thoughts on how adorable these pups are!</p>
          </main>
          </>
      );
}

export default About

// App
  // NavBar
  // About
  // PitGenerator
  // Pits
    // PitCard