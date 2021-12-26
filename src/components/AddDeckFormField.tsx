import { useState } from 'react';
import { Col, Form, Row } from "react-bootstrap";
import "../App.css";
import { Attribute, fieldType } from "../interfaces/attribute";
import Select from "react-select";

interface addDeckFormField {
    attribute: Attribute,
    handleChange: (ev: React.ChangeEvent<HTMLFormElement>) => void
}
interface Option {
    readonly value: string,
    readonly label: string
}

export function AddDeckFormField({ attribute, handleChange }: addDeckFormField): JSX.Element {

    return <div>
        {attribute.type === fieldType.text &&
            <Form.Group as={Row} className="mb-3" controlId={attribute.attribute} onChange={handleChange}>
                <Form.Label column sm="2">
                    {attribute.display}
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" placeholder={"Ex. " + attribute.default} name={attribute.attribute} />
                </Col>
            </Form.Group>
        }
        {attribute.type === fieldType.singleSelect &&
            <Form.Group as={Row} className="mb-3" controlId={attribute.attribute} onChange={handleChange}>
                <Form.Label column sm="2">
                    {attribute.display}
                </Form.Label>
                <Col sm="10">
                    <Form.Select aria-label={attribute.attribute + "Select"}>
                        {attribute.values.map(valueName => {
                            return <option value={valueName}>{valueName}</option>;
                        })}
                    </Form.Select>
                </Col>
            </Form.Group>
        }
        {attribute.type === fieldType.multiSelect &&
        <Select
            defaultValue={[]}
            isMulti
            name={attribute.attribute}
            options={attribute.values.map(value => {
                return {value: value, label: value};
            }) as readonly Option[]}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        }
        </div>;
}