import { Col, Form, Row } from "react-bootstrap";
import "../App.css";
import { Attribute, fieldType } from "../interfaces/attribute";
import ReactHookSelect from "react-hook-select";
import "react-hook-select/dist/styles.scss";

interface addDeckFormField {
    attribute: Attribute,
    handleChange: (ev: React.ChangeEvent<HTMLFormElement>) => void
}

interface Item {
    id: string,
    name: string
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
            <ReactHookSelect
                label="select"
                enableMultiple={true}
                enableSearch={false}
                placeholder={"choose option"}
                defaultValue={[]}
                options={[
                    { label: "Group A", value: "Group A", group: true },
                    { label: "a", value: "a" },
                    { label: "Group B", value: "Group B", group: true },
                    { label: "b", value: "b" },
                ]}
                getValue={() => {}}
            />
        }
    </div>;
}