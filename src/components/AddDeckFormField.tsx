import { Col, Form, Row } from "react-bootstrap";
import "../App.css";
import { Attribute, fieldType } from "../interfaces/attribute";
import { Deck } from "../interfaces/deck";

interface addDeckFormField {
    attributeKey: string,
    attribute: Attribute,
    handleChange: (ev: React.ChangeEvent<HTMLFormElement>) => void
}

export function AddDeckFormField({ attributeKey, attribute, handleChange }: addDeckFormField): JSX.Element {
    return <div>
        { attribute.type === fieldType.text &&
            <Form.Group as={Row} className="mb-3" controlId={attributeKey} onChange={handleChange}>
                <Form.Label column sm="2">
                    {attribute.display}
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" placeholder={attribute.display} name={attributeKey}/>
                </Col>
            </Form.Group>
        }
    </div>;
}