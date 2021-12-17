import { Button, Modal, Row } from 'react-bootstrap';
import '../App.css';
import { Deck } from '../interfaces/deck';



interface iAddDeck {
    decks: Deck[],
    setDecks: (decks: Deck[]) => (void),
    showAdd: boolean,
    setShowAdd: (showAdd: boolean) => (void)
}

export function AddDeck({ decks, setDecks, showAdd, setShowAdd }: iAddDeck): JSX.Element {

    function onShow(): void {
        setShowAdd(true);
    }
    function onHide(): void {
        setShowAdd(false);
    }

    return <div>
        <div>
            <Button onClick={onShow}>+ Add new deck</Button>
        </div>
        <Modal show={showAdd}
            onHide={onHide}
            size="lg">
            <Modal.Header closeButton>
                Add a deck
            </Modal.Header>
            <Modal.Body>
                <p>yay</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>;
    </div>;
}
