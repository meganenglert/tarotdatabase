import '../../App.css';
import { Deck } from '../../interfaces/deck';


interface iInfoTableRow {
    deck: Deck,
    title: string,
    attribute: string
}

export function InfoTableRow({deck, title, attribute} : iInfoTableRow): JSX.Element {

    const TEXT_ENTRY = [
        "author", 
        "artist",
        "num-cards",
        "suit-names"
    ];
    const SINGLE_SELECT = [
        "type",
        "guidebook",
        "minor-arcana"
    ];
    const MULTI_SELECT = [
        "genre",
        "cws"
    ];

    var key = attribute as keyof typeof deck;

    return <tr>
        <td className="info-text field-title">{title}</td>

        {/* Text Entry */}
        {TEXT_ENTRY.includes(attribute) && <td className="info-text text-entry">
            {deck[key]}
        </td>}

        {/* Single Select */}
        {SINGLE_SELECT.includes(attribute) && <td className="info-text single-select">
            {deck[key]}
        </td>}

        {/* Multi Select */}
        {MULTI_SELECT.includes(attribute) && <td className="info-text multi-select">
            {deck[key]}
        </td>}

        {!TEXT_ENTRY.includes(attribute) && !SINGLE_SELECT.includes(attribute) && !MULTI_SELECT.includes(attribute)
            && <td>ERROR</td>
        }
    </tr>;
}