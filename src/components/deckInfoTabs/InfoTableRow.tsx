import { Table } from 'react-bootstrap';
import '../../App.css';
import { Deck } from '../../interfaces/deck';


interface iInfoTableRow {
    deck: Deck,
    attribute: string
}

export function InfoTableRow({deck, attribute} : iInfoTableRow): JSX.Element {
    return <div></div>;
}