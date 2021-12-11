import React, { useState } from 'react';
import '../App.css';
import { Card } from 'react-bootstrap';
import { Deck } from '../interfaces/deck';
import { DeckDetailModal } from './DeckDetailModal';

interface iDeckCard {
    deck: Deck;
}

export function DeckCard({deck} : iDeckCard): JSX.Element {
    
    const [show, setShow] = useState(false);

    function showDetails(deck : Deck) {
        setShow(true);
    }
    function hideDetails() {
        setShow(false);
    }
    return <> 
        <Card bg="light" text="dark" onClick={() => showDetails(deck)} 
            style={{ cursor: "pointer" }}>
            <Card.Img src="https://i.imgur.com/jVLmj44.png"/>
            <Card.Body>
                <Card.Title>{deck.title}</Card.Title>
                <Card.Text>
                    {deck.artist}
                </Card.Text>
            </Card.Body>
        </Card>

        <DeckDetailModal show={show} onHide={hideDetails} deck={deck}></DeckDetailModal>
    </>;
}