import { useState } from "react";
import { Body } from "./typography";
import { AddButton } from "./button";
//https://www.freecodecamp.org/news/how-to-build-forms-in-react/
// https://www.w3schools.com/react/react_forms.asp
export function Input({
  inputId,
  inputName,
  placeholder,
  inputTitle,
  value,
  type,
  variant = "light",
  error,
  handleChange,
  ...inputProps
}) {
  

  //Defining object variantMaps with properties meant to define each input style
  const variantMaps = {
    light: `focus:border-neutral-black transition-colors duration-300 ease-in-out hover:border-brand-blue placeholder:text-dark-grey  ${
      inputValue !== "" ? "border-brand-blue" : "border-light-grey"
    }`,
    dark: `border-neutral-white text-neutral-white placeholder:text-dark-grey  ${
      inputValue !== "" ? "border-neutral-white" : "border-dark-grey"
    }`,
    error: `text-brand-red border-brand-red placeholder:text-brand-red`,
  };

  const finalInputClasses = `border-b border-solid bg-transparent font-nunito outline-offset-4 ${
    variantMaps[variant.toLowerCase()]
  }`;

  let titleHeading = "";
  if (variant == "dark") {
    titleHeading = "text-neutral-white";
  } else if (variant == "error") {
    titleHeading = "text-brand-red";
  } else {
    titleHeading = "text-neutral-black";
  }

  return (
    <div className="input-wrapper flex flex-col gap-2">
      <Body body2={true} classHeading={`font-bold ${titleHeading}`}>
        {" "}
        {inputTitle}
      </Body>
      <label htmlFor={inputId}>
        <input
          type={type}
          className={`${finalInputClasses}`}
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
  };

  //object that contains several input values

  const [inputValue, setInputValue] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputValue((values) => ({ ...values, [name]: value }));
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
    <Input handleChange={handleChange}/>
    <Input handleChange={handleChange}/>
      <AddButton role="submit"></AddButton>
    </form>
  );
}
