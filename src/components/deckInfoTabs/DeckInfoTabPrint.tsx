import { Table } from 'react-bootstrap';
import '../../App.css';
import { Deck } from '../../interfaces/deck';


interface iDeckInfoTabPrint {
    deck: Deck

}

export function DeckInfoTabPrint({deck} : iDeckInfoTabPrint): JSX.Element {
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