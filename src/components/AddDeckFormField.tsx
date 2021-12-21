import { Col, Form, Row } from "react-bootstrap";
import "../App.css";
import { Attribute, fieldType } from "../interfaces/attribute";

interface addDeckFormField {
    key: string,
    attribute: Attribute
}

export function AddDeckFormField({ key, attribute }: addDeckFormField): JSX.Element {
    return <div>
        { attribute.type === fieldType.text &&
            <Form.Group as={Row} className="mb-3" controlId={"form" + key}>
                <Form.Label column sm="2">
                    {attribute.display}
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" placeholder={attribute.display} />
                </Col>
            </Form.Group>
        }
    </div>;
}