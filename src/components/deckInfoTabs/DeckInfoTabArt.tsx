import { Table } from 'react-bootstrap';
import '../../App.css';
import { Deck } from '../../interfaces/deck';


interface iDeckInfoTabArt {
    deck: Deck

}

export function DeckInfoTabArt({deck} : iDeckInfoTabArt): JSX.Element {
    return <Table>
        <tbody>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </Table>;
}