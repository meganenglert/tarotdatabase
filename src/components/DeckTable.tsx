import React from 'react';
import '../App.css';
import { Card, Col, Row } from 'react-bootstrap';
import { Deck } from '../interfaces/deck';

interface iDeckTable {
    decks: Deck[];
}

export function DeckTable({ decks }: iDeckTable): JSX.Element {

    return <Row xs={1} md={4} className="g-4">
        {decks.map((deck) => (<Col>
            <Card bg="light" text="dark">
                <Card.Body>
                    <Card.Title>{deck.title}</Card.Title>
                    <Card.Text>
                        {deck.artist}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        ))}
    </Row>;
}