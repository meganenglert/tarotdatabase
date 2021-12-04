import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DECKDATA from './assets/decks.json';
import { Deck } from './interfaces/deck';
import { DeckTable } from './components/DeckTable';
import { Col, Row } from 'react-bootstrap';
import { Filters } from './components/Filters';

function App(): JSX.Element {
  const [decks, setDecks] = useState<Deck[]>(DECKDATA as Deck[]);

  return (
    <div className="App">
      <h1>DeckFinder</h1>
        <Row>
          <Col xs={3}><Filters></Filters></Col>
          <Col><DeckTable decks={decks}></DeckTable></Col>
      </Row>
    </div>
  );
}

export default App;
