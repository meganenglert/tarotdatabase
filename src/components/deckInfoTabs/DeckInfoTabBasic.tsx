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
            {Object.entries(deck).map(([key, value]) => {
                var attribute: Attribute = getAttribute(key);
                if (attribute.tab === tab.basicInfo) {
                    return <InfoTableRow attribute={attribute} value={value}></InfoTableRow>
                }
                return <></>;
            })}
        </tbody>
    </Table>;
}