import React, { useState } from 'react';
import { Accordion, Button, Form, Modal } from 'react-bootstrap';
import '../App.css';
import { Deck } from '../interfaces/deck';
import { AddDeckFormField } from './AddDeckFormField';
import DEFAULTDECK from '../assets/default-deck.json';
import ATTRIBUTES from '../assets/deck-attributes.json';
import { Attribute, fieldType, tab } from '../interfaces/attribute';


interface iAddDeck {
    decks: Deck[],
    setDecks: (decks: Deck[]) => (void),
    showAdd: boolean,
    setShowAdd: (showAdd: boolean) => (void)
}

export function AddDeck({ decks, setDecks, showAdd, setShowAdd }: iAddDeck): JSX.Element {

    const attributes: Record<string, Attribute> = ATTRIBUTES as Record<string, Attribute>;

    function getAttribute(key: string): Attribute {
        if (Object.keys(ATTRIBUTES).includes(key)) {
            return attributes[key];
        }
        return {"attribute":"ERROR", "display":"KEY NOT FOUND", "type":fieldType.text, "tab":tab.basicInfo};
    }

    const [newDeck, setNewDeck] = useState<Deck>(DEFAULTDECK as Deck);

    function getTab(tab: tab): object[] {
        return Object.entries(newDeck).filter( ([key, object]) => {
            return getAttribute(key).tab === tab;
        })
        .map( ([key, value]) => {
            return <AddDeckFormField attributeKey={key} attribute={getAttribute(key)} handleChange={handleChange}></AddDeckFormField>;
        });
    }

    function onShow(): void {
        setShowAdd(true);
    }
    function onHide(): void {
        setShowAdd(false);
    }

    function submitNewDeck(ev: React.ChangeEvent<HTMLFormElement>): void {
        ev.preventDefault();
        setDecks([ ...decks, newDeck ]);
    }

    function handleChange(ev: React.ChangeEvent<HTMLFormElement>): void {
        setNewDeck({ ...newDeck, [ev.target.name]: ev.target.value});
    } 

    return <div>
        <div>
            <Button onClick={onShow}>+ Add new deck</Button>
        </div>
        <Modal show={showAdd}
            onHide={onHide}
            size="lg">
            <Modal.Header closeButton>
                Submit a New Deck
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={submitNewDeck}>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Basic Information</Accordion.Header>
                            <Accordion.Body>
                                {getTab(tab.basicInfo)}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Art</Accordion.Header>
                            <Accordion.Body>
                                {getTab(tab.art)}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Print</Accordion.Header>
                            <Accordion.Body>
                                {getTab(tab.print)}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Publication</Accordion.Header>
                            <Accordion.Body>
                                {getTab(tab.publication)}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <div className="text-center"><Button type="submit" className="submitButton">Submit</Button></div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </div>;
}
