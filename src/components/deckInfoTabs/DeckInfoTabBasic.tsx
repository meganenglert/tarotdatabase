import { Table } from 'react-bootstrap';
import '../../App.css';
import { Deck } from '../../interfaces/deck';


interface iDeckInfoTabBasic {
    deck: Deck

}

export function DeckInfoTabBasic({deck} : iDeckInfoTabBasic): JSX.Element {
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