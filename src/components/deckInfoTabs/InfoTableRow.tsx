import '../../App.css';
import { Attribute, fieldType } from '../../interfaces/attribute';

interface iInfoTableRow {
    attribute: Attribute,
    value: string
}

export function InfoTableRow({attribute, value} : iInfoTableRow): JSX.Element {

    return <tr key={attribute.display}>
        <td className="info-text field-title">{attribute.display}</td>

        {/* Text Entry */}
        {attribute.type === fieldType.text && <td className="info-text text-entry">
            {value}
        </td>}

        {/* Single Select */}
        {attribute.type === fieldType.singleSelect && <td className="info-text single-select">
            {value}
        </td>}

        {/* Multi Select */}
        {attribute.type === fieldType.multiSelect && <td className="info-text multi-select">
            {value}
        </td>}

    </tr>;
}