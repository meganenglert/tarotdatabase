import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Deck } from '../interfaces/deck';

interface iDeckTable {
    decks: Deck[];
}

export function DeckTable({decks} : iDeckTable): JSX.Element {

    return <Row xs={1} md={2} className="g-4">
            {decks.map((deck) => (
                <Col>
                    <p>There's a deck here!</p>
                </Col>
            ))}
        </Row>;
}