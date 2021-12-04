import React, { useState } from 'react';
import './App.css';
import DECKDATA from './assets/decks.json';
import { Deck } from './interfaces/deck';
import { DeckTable } from './components/DeckTable';

function App(): JSX.Element {
  const [decks, setDecks] = useState<Deck[]>(DECKDATA as Deck[]);
    
  return (
    <div className="App">
      <h1>DeckFinder</h1>
      <DeckTable decks={decks}></DeckTable>
    </div>
  );
}

export default App;