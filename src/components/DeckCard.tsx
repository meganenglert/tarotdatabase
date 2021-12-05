import React from 'react';
import '../App.css';
import { Card } from 'react-bootstrap';
import { Deck } from '../interfaces/deck';

interface iDeckCard {
    deck: Deck;
}

export function DeckCard({deck} : iDeckCard): JSX.Element {
    return <Card bg="light" text="dark">
        <Card.Img src="https://i.imgur.com/jVLmj44.png"/>
        <Card.Body>
            <Card.Title>{deck.title}</Card.Title>
            <Card.Text>
                {deck.artist}
            </Card.Text>
        </Card.Body>
    </Card>;
}