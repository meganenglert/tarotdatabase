import { Table } from 'react-bootstrap';
import '../../App.css';
import { Attribute, tab } from '../../interfaces/attribute';
import { Deck } from '../../interfaces/deck';
import { InfoTableRow } from './InfoTableRow';


interface iDeckInfoTabArt {
    deck: Deck,
    getAttribute: (key: string) => Attribute;
}

export function DeckInfoTabArt({deck, getAttribute} : iDeckInfoTabArt): JSX.Element {

    return <Table striped className="deck-info-tab">
        <tbody>
            {Object.entries(deck).map(([key, value]) => {
                var attribute: Attribute = getAttribute(key);
                if (attribute.tab === tab.art) {
                    return <InfoTableRow attribute={attribute} value={value}></InfoTableRow>
                }
                return <></>;
            })}
        </tbody>
    </Table>;
}