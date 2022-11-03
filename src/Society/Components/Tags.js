import React, { Component } from "react";
import ReactDOM from "react-dom";
import { colourOptions } from "./tag_data.js";
import { default as ReactSelect, StylesConfig } from "react-select";
// import "./styles.css";
import { components } from "react-select";

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        {/* <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        /> */}
        <label style={{ color: "black" }}>{props.label}</label>
      </components.Option>
    </div>
  );
};

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionSelected: null,
    };
  }

  handleChange = (selected) => {
    this.setState({
      optionSelected: selected,
    });
  };

  render() {
    const colourStyles = {
      control: (styles) => ({ ...styles, backgroundColor: "white" }),
      option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
          ...styles,
          backgroundColor: isFocused ? "#9747ff" : "white",
          cursor: isDisabled ? "not-allowed" : "default",
        };
      },
    };
    return (
      <span
        // class="d-inline-block"
        data-toggle="popover"
        data-trigger="focus"
        data-content="Please selecet account(s)"
      >
        <ReactSelect
          styles={colourStyles}
          options={colourOptions}
          isMulti
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          components={{
            Option,
          }}
          onChange={this.handleChange}
          allowSelectAll={true}
          value={this.state.optionSelected}
        />
      </span>
    );
  }
}
