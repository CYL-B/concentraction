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
  isDark = false,
  error,
  onChangeInput,
  ...inputProps
}) {

    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

  return (
    <div className="input-wrapper flex flex-col gap-2">
      <Body body2={true} classHeading={`font-bold ${isDark?"text-neutral-white":""}`}> {inputTitle}</Body>
      <label for={inputId}>
        <input
          type="" 
          className={`border-b border-solid bg-transparent font-nunito placeholder:text-dark-grey outline-offset-4 ${!isDark?"border-light-grey focus:border-neutral-black transition-colors duration-300 ease-in-out hover:border-brand-blue":"border-neutral-white text-neutral-white"}`}
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
