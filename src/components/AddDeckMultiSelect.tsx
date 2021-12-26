import React from "react";
import { render } from "react-dom";
import Select from "react-select";
import { ValueType } from "react-select/lib/types";
import Hello from "./Hello";

interface Animal {
  name: string;
  type: string;
  age: number;
}

const animals: Animal[] = [
  {
    name: "Tom",
    type: "dinosaur",
    age: 25
  },
  {
    name: "Alfred",
    type: "turtle",
    age: 12
  },
  {
    name: "Jeff",
    type: "snail",
    age: 19
  }
];

interface ArrayObjectSelectProps {}

interface ArrayObjectSelectState {
  selectedAnimal: Animal | null;
}

class ArrayObjectSelect extends React.Component<
  ArrayObjectSelectProps,
  ArrayObjectSelectState
> {
  public state: ArrayObjectSelectState = {
    selectedAnimal: null
  };

  public handleChange = (option: ValueType<Animal>) => {
    console.log(option);
    this.setState({
      selectedAnimal: option
    });
  };

  public render() {
    return (
      <Select<Animal>
        value={this.state.selectedAnimal}
        getOptionLabel={(animal: Animal) => animal.name}
        getOptionValue={(animal: Animal) => animal.type}
        options={animals}
        isClearable={true}
        backspaceRemovesValue={true}
        onChange={this.handleChange}
      />
    );
  }
}

enum GoodAnimal {
  DINOSAUR = "DINOSAUR",
  TURTLE = "TURTLE",
  SNAIL = "SNAIL"
}

interface EnumSelectProps {}
interface EnumSelectState {
  selectedAnimal: string;
}

interface StringOption {
  label: string;
  value: string;
}

class EnumSelect extends React.Component<EnumSelectProps, EnumSelectState> {
  public state: EnumSelectState = {
    selectedAnimal: ""
  };

  public handleChange = (option: ValueType<StringOption>) => {
    console.log(option);
    this.setState({
      selectedAnimal: option ? (option as StringOption).value : ""
    });
  };

  public render() {
    const options = Object.keys(GoodAnimal).map(key => ({
      label: GoodAnimal[key],
      value: key
    }));
    const selectedOption = options.find(
      option => option.value === this.state.selectedAnimal
    );
    return (
      <Select
        value={selectedOption}
        options={options}
        isClearable={true}
        onChange={this.handleChange}
      />
    );
  }
}

const App: React.FunctionComponent = () => (
  <div>
    <Hello name="CodeSandbox" />
    <h2>Array of non-primitives</h2>
    <ArrayObjectSelect />
    <h2>Enum</h2>
    <EnumSelect />
  </div>
);

render(<App />, document.getElementById("root"));
