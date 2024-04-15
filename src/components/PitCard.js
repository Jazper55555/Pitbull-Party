import React from "react";
import Card from 'react-bootstrap/Card'

function PitCard ({id, name, nickname, image, weight, food}) {
    return (
        <Card>
            <Card.Header>Name: {name}</Card.Header>
            <Card.Body>
                <Card.Title>Nickname: {nickname}</Card.Title>
                <Card.Text>Weight: {weight}</Card.Text>
                <Card.Text>Favorite Snack: {food}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default PitCard