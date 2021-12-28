import { Table } from 'react-bootstrap';
import '../../App.css';
import { Attribute, tab } from '../../interfaces/attribute';
import { Deck } from '../../interfaces/deck';
import { InfoTableRow } from './InfoTableRow';


interface iDeckInfoTabPublication {
    deck: Deck,
    getAttribute: (key: string) => Attribute;
}

export function DeckInfoTabPublication({deck, getAttribute} : iDeckInfoTabPublication): JSX.Element {

    return <Table striped className="deck-info-tab">
        <tbody>
            {Object.entries(deck).filter(([key, value]) => {
                return getAttribute(key).tab === tab.publication;
            }).map(([key, value]) => {
                var attribute: Attribute = getAttribute(key);
                return <InfoTableRow key={attribute.attribute} attribute={attribute} value={value}></InfoTableRow>
            })}
        </tbody>
    </Table>;
}