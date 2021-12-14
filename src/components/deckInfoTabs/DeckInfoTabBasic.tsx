import { Table } from 'react-bootstrap';
import '../../App.css';
import { Deck, deckType } from '../../interfaces/deck';
import { InfoTableRow } from './InfoTableRow';


interface iDeckInfoTabBasic {
    deck: Deck
}

export function DeckInfoTabBasic({deck} : iDeckInfoTabBasic): JSX.Element {

    const NOT_TAROT = [deckType.oracle];

    function isTarot(): boolean {
        return !NOT_TAROT.includes(deck.type);
    }

    return <Table striped className="deck-info-tab">
        <tbody>
            <InfoTableRow deck={deck} title="Author" attribute="author"></InfoTableRow>
            <tr>
                <td>Artist</td>
                <td>{deck.artist}</td>
            </tr>
            <tr>
                <td>Type</td>
                <td>{deck.type}</td>
            </tr>
            <tr>
                <td>Number of Cards</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Guidebook</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Genre</td>
                <td>-</td>
            </tr>
            {isTarot() && <tr>
                <td>Minor Arcana</td>
                <td>-</td>
            </tr>}
            {isTarot() && <tr>
                <td>Suitnames (WCSP)</td>
                <td>pee poo dice beans</td>
            </tr>}
            <tr>
                <td>Content Warnings</td>
                <td>-</td>
            </tr>
        </tbody>
    </Table>;
}