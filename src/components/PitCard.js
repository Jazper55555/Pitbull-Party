import React from "react";
// import Card from 'react-bootstrap/Card'

function PitCard ({id, name, nickname, image, weight, food}) {

    return (
        // <div className='ui three wide column grid card container'>
        // <Card>
        //     <img src={image} className='card-image ui raised card'/>
        //     <Card.Header>Name: {name}</Card.Header>
        //     <Card.Body>
        //         <Card.Title>Nickname: {nickname}</Card.Title>
        //         <Card.Text>Weight: {weight} lbs</Card.Text>
        //         <Card.Text>Favorite Snack: {food}</Card.Text>
        //     </Card.Body>
        // </Card>
        // </div>

<div className='ui three wide column grid card container'>
    <div className="column">
        <div className="ui fluid card">
            <div className="image">
                <img src={image} alt='image' className="card-image ui raised card"/>
            </div>
            <div className="content">
                <span className="header">{name}</span>
                <div className="meta">
                <span>Nickname: {nickname}</span>
                </div>
                <div className="description">
                Weight: {weight} lbs
                </div>
            </div>
            <div className="extra content">
                <span className="center floated">
                    Favorite Snack: {food}
                </span>
            </div>
        </div>
    </div>
</div>
    )
}

export default PitCard