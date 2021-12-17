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
            {Object.entries(deck).map(([key, value]) => {
                var attribute: Attribute = getAttribute(key);
                if (attribute.tab === tab.publication) {
                    return <InfoTableRow attribute={attribute} value={value}></InfoTableRow>
                }
                return <></>;
            })}
        </tbody>
    </Table>;
}