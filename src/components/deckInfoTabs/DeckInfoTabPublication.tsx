import { Table } from 'react-bootstrap';
import '../../App.css';
import { Deck } from '../../interfaces/deck';


interface iDeckInfoTabPublication {
    deck: Deck

}

export function DeckInfoTabPublication({deck} : iDeckInfoTabPublication): JSX.Element {
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