import React from 'react';
import '../App.css';
import { Col, Row } from 'react-bootstrap';
import { Deck } from '../interfaces/deck';
import { DeckCard } from './DeckCard';

interface iDeckTable {
    decks: Deck[];
}

export function DeckTable({ decks }: iDeckTable): JSX.Element {

    return <Row xs={2} md={4} className="g-4">
        {decks.map((deck, index) => (<Col key={index}>
            <DeckCard deck={deck}></DeckCard>
        </Col>
        ))}
    </Row>;
}