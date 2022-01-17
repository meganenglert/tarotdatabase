import { Col, Form, Row } from "react-bootstrap";
import { Attribute, fieldType } from "../interfaces/attribute";
import ReactHookSelect from "react-hook-select";
import "react-hook-select/dist/styles.scss";
import "../App.css";

interface addDeckFormField {
    attribute: Attribute,
    handleChange: (ev: React.ChangeEvent<HTMLFormElement>) => void,
    handleChangeMulti: (attr: string, values: string[]) => void
}

export function AddDeckFormField({ attribute, handleChange, handleChangeMulti }: addDeckFormField): JSX.Element {

    return <div key={attribute.attribute}>
        {attribute.type === fieldType.text &&
            <Form.Group as={Row} className="mb-3 align-items-center not-multi-row" controlId={attribute.attribute} onChange={handleChange}>
                <Form.Label column sm="2">
                    <span className="attribute-label">{attribute.display}</span>
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" placeholder={"e.g. " + attribute.default} name={attribute.attribute} />
                </Col>
            </Form.Group>
        }
        {attribute.type === fieldType.singleSelect &&
            <Form.Group as={Row} className="mb-3 align-items-center not-multi-row" controlId={attribute.attribute} onChange={handleChange}>
                <Form.Label column sm="2">
                    <span className="attribute-label">{attribute.display}</span>
                </Form.Label>
                <Col sm="10">
                    <Form.Select aria-label={attribute.attribute + "Select"} name={attribute.attribute}>
                        {attribute.values.map(valueName => {
                            return <option key={valueName} value={valueName}>{valueName}</option>;
                        })}
                    </Form.Select>
                </Col>
            </Form.Group>
        }
        {attribute.type === fieldType.multiSelect &&
            <Row className="align-items-center">
                <Col sm="2">
                    <p className="attribute-label">{attribute.display}</p>
                </Col>
                <Col sm="10" className="multiselect">
                    <ReactHookSelect
                        enableMultiple={true}
                        enableSearch={true}
                        placeholder={"Choose " + attribute.display}
                        defaultValue={[]}
                        options={attribute.values.map(value => {
                            return { label: value, value: value }
                        })}
                        getValue={(values) => { handleChangeMulti(attribute.attribute, values)}}
                    />
                </Col>
            </Row>
        }
    </div>;
}