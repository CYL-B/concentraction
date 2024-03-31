import { useState } from "react";
import { Body } from "./typography";
import { AddButton } from "./button";
//https://www.freecodecamp.org/news/how-to-build-forms-in-react/

export function Input({
  inputId,
  inputName,
  placeholder,
  inputTitle,
  value,
  onChangeInput,
  ...inputProps
}) {

    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

  return (
    <div className="input-wrapper">
      <Body body2={true}> {inputTitle}</Body>
      <label for={inputId}>
        <input
          type=""
          id={inputId}
          name={inputName}
          placeholder={placeholder}
          onChange={handleChange}
          value={inputValue}
          {...inputProps}
        ></input>
      </label>
    </div>
  );
}

export function Form({}) {

    const handleSubmit = () => {
        e.preventDefault();

    }
  return (
    <form method="post" onSubmit={handleSubmit}>
      <AddButton role="submit"></AddButton>
    </form>
  );
}
