import { Button, Col, Modal, Row, Image, Tabs, Tab } from 'react-bootstrap';
import { DeckInfoTabBasic } from './deckInfoTabs/DeckInfoTabBasic'
import '../App.css';
import { Deck } from '../interfaces/deck';


interface iDeckDetailModal {
    show: boolean,
    onHide: () => (void),
    deck: Deck

}

export function DeckDetailModal({show, onHide, deck} : iDeckDetailModal): JSX.Element {
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
                            <DeckInfoTabBasic deck={deck}></DeckInfoTabBasic>
                        </Tab>
                        <Tab eventKey="art" title="Art">
                            this deck has art! wow!
                        </Tab>    
                        <Tab eventKey="specs" title="Deck Specs" disabled>
                            contact
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