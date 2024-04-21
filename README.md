# Phase 2 Project - Pitbull Party

Welcome to Pitbull Party - a website designed for Pitbull lovers, enthusiasts, and advocates alike. Details on requirements, navigation, and code can be found below.

## Introduction/Purpose

The goal of the webpage is for Pitbull enthusiasts to learn more about the lovable pups as well as create custom Pitbull cards with their own customized information. The webpage is broken up into various *pages* that can be navigated through the *Menu*.

## Opening the Webpage

In order to open the webpage, you will need to fork the following two respositories:

[Phase 2 Project Front End](https://github.com/Jazper55555/phase-2-project)

[Phase 2 Project Back End](https://github.com/Jazper55555/json-server-template)

The first repository allows you to actually run the webpage using:
`npm start`

The second repsoitory allows to access the data needed to populate the proper renders on each *page*. You can access the data using:
`json-server --watch db.json`

## Navigating the Webpage

There are 4 main *pages* that may be navigated once the website is up and running:

1. **Home**
2. **About**
3. **Pits**
4. **Pit Generator**

Each of these 4 *pages* can be found on either the **Home** page menu or the toggle menu found in the upper left hand corner of the screen.

Here's the basic breakdown of each *page*:

#### Home
This is the Home *page* where you will immediately be shown the menu front and center. The navigation menu can also be found in the upper left hand corner of the screen.

#### About
This is where you will find some useful information on the webpage itself as well as some advocating words for the Pitbulls.

#### Pits
Here, you can see the Pitbulls that make up the Pitbull Party crew as well as some fun facts about each pup.

#### Pit Generator
This is a random image generator that will display a customized Pitbull Card similar to the ones in the Pits *page* based on the information you input. Each time you fill in the blanks, a new card is generated based on your input.

## Requirements Satisfied

1. This is a single page application that was created using: 
`create-react-app`

2. The App utilizes 7 components as follows:
    1. **App.js**
    2. **Home.js**
    3. **NavBar.js**
    4. **About.js**
    5. **Pits.js**
    6. **PitCard.js**
    7. **PitGenerator.js**

3. There are 4 client-side routes (not including the App.js file) as follows:
    1. *Home (same as App)*
    2. *About*
    3. *Pits*
    4. *PitGenerator*

4. Utilizing the json-server-template provided, I created a db.json file that is accessible from both `GET` and `POST` requests. I have also incorporated a `DELETE` request in order to prevent the `POST` data requests from piling up. 

    The `GET` request happens in the *<App>* component where the initial db.json data is rendered with the `useEffect` hook and subsequently passed down to the other components.

    The `POST` and `DELETE` requests happen in the *<PitGenerator>* component where there is a controlled form that utilizes a number of state variables within the component.
    
5. A handful of CSS properties were added to the various pages including some references to:
[React Bootstrap](https://react-bootstrap.github.io/) and [Semantic UI](https://react.semantic-ui.com/)

## Acknolwedgements

All Pitbull pictures were obtained through [DOG API](https://dog.ceo/dog-api/)

Some CSS properties were borrowed from [React Bootstrap](https://react-bootstrap.github.io/) and [Semantic UI](https://react.semantic-ui.com/)

Various *page* backgrounds were obtained through Google Image Search
