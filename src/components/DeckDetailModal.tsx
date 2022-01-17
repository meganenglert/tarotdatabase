import { Button, Col, Modal, Row, Image, Tabs, Tab } from 'react-bootstrap';
import '../App.css';
import { Deck } from '../interfaces/deck';
import { DeckInfoTab } from './deckInfoTabs/DeckInfoTab';
import Attributes from "../assets/deck-attributes.json";
import { Attribute, fieldType, tab } from '../interfaces/attribute';


interface iDeckDetailModal {
    show: boolean,
    onHide: () => (void),
    deck: Deck

}

export function DeckDetailModal({ show, onHide, deck }: iDeckDetailModal): JSX.Element {

    const ATTRIBUTES: Record<string, Attribute> = Attributes as Record<string, Attribute>;

    function getAttribute(key: string): Attribute {
        if (Object.keys(ATTRIBUTES).includes(key)) {
            return ATTRIBUTES[key];
        }
        return { "attribute": "ERROR", "display": "KEY NOT FOUND", "type": fieldType.text, "tab": tab.basicInfo, "default": "", "values": [] };
    }

    return <Modal show={show}
        onHide={onHide}
        size="lg">
        <Modal.Header closeButton>
            <Modal.Title>{deck.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col sm={7}>
                    <Tabs defaultActiveKey="basicinfo">
                        <Tab eventKey="basicinfo" title="Basic Info">
                            <DeckInfoTab tab={tab.basicInfo} deck={deck} getAttribute={getAttribute}></DeckInfoTab>
                        </Tab>
                        <Tab eventKey="art" title="Art">
                            <DeckInfoTab tab={tab.art} deck={deck} getAttribute={getAttribute}></DeckInfoTab>
                        </Tab>
                        <Tab eventKey="print" title="Print">
                            <DeckInfoTab tab={tab.print} deck={deck} getAttribute={getAttribute}></DeckInfoTab>
                        </Tab>
                        <Tab eventKey="publication" title="Publication">
                            <DeckInfoTab tab={tab.publication} deck={deck} getAttribute={getAttribute}></DeckInfoTab>
                        </Tab>
                    </Tabs>
                </Col>
                <Col sm={5} class-id="deckdetailmodal-image">
                    <Image src="https://i.imgur.com/jVLmj44.png" fluid></Image>
                </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>;
}