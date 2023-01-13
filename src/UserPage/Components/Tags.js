import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import { colourOptions } from "./tag_data.js";
import { default as ReactSelect } from "react-select";
// import "./styles.css";
import { components } from "react-select";
import { CatchingPokemonRounded } from "@mui/icons-material";
const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        {/* <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        /> */}
        <label>{props.label}</label>
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

  handleChange = async (selected) => {
    this.setState({
      optionSelected: selected,
    });
    await this.props.sel_categories(selected);
    this.props.handleCategory();
  };

  render() {
    const colourStyles = {
      control: (styles) => ({ 
        ...styles, 
        backgroundColor: "white",
        fontSize:"0.8rem",
        fontWeight:"bolder",
        color:"black",
        fontFamily:"Arial",
        marginLeft:"1vw",
        border:"black",
        backgroundColor:"rgba(255, 255, 255, 0.5)"}),
        placeholder: (styles) => ({ 
          ...styles, 
         
          fontSize:"0.9rem",
          color:"black",
          fontFamily:"Montserrat",
          }),
          indicatorContainer: (styles) =>({
            color:"black",
          }

          ),
          menu: (styles) => ({ 
            ...styles, 
           
            fontSize:"0.8rem",
            color:"black",
            fontFamily:"Montserrat",
            }), 
      option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
          ...styles,
          color:'black',
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
        placeholder= 'Filter by Category'
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

