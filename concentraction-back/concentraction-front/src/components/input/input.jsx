import { Body } from "../typography";
//https://www.freecodecamp.org/news/how-to-build-forms-in-react/
// https://www.w3schools.com/react/react_forms.asp
//Integrating existing inputs https://react-hook-form.com/get-started#Integratinganexistingform
export function Input({
  register,
  required,
  inputName,
  placeholder,
  inputTitle,
  inputValue,
  type,
  variant = "light",
  error,
  validate,
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

  console.log("register", register(inputName))
  return (
    <div className="input-wrapper flex flex-col gap-2">
      <Body body2={true} classHeading={`font-bold ${titleHeading}`}>
        {" "}
        {inputTitle}
      </Body>
      <label htmlFor={inputName}>
        <input
        {...register(inputName)}
          type={type}
          className={`${finalInputClasses}`}
          id={inputName}
          placeholder={placeholder}
          onChange={handleChange}
          value={inputValue}
          {...inputProps}
        ></input>
      </label>
    </div>
  );
}

export function FieldSet ({children}) {

  return(
    <fieldset>
      {children}
    </fieldset>
  )
}
