import { Table } from 'react-bootstrap';
import '../../App.css';
import { Attribute, tab } from '../../interfaces/attribute';
import { Deck } from '../../interfaces/deck';
import { InfoTableRow } from './InfoTableRow';


interface iDeckInfoTabBasic {
    deck: Deck,
    getAttribute: (key: string) => Attribute;
}

export function DeckInfoTabBasic({deck, getAttribute} : iDeckInfoTabBasic): JSX.Element {
    /*
    const NOT_TAROT = [deckType.oracle];

    function isTarot(): boolean {
        return !NOT_TAROT.includes(deck.type);
    }
    */

    return <Table striped className="deck-info-tab">
        <tbody>
            {Object.entries(deck).filter(([key, value]) => {
                return getAttribute(key).tab === tab.basicInfo;
            }).map(([key, value]) => {
                var attribute: Attribute = getAttribute(key);
                return <InfoTableRow key={attribute.attribute} attribute={attribute} value={value}></InfoTableRow>
            })}
        </tbody>
    </Table>;
}