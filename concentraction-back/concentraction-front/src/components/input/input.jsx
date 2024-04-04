import { Body } from "../typography";
//Integrating existing inputs https://react-hook-form.com/get-started#Integratinganexistingform
/*
register: props required to pass register function from react hook form
required : part of the register function
inputName : name, id and HTMLFOR of element
inputTitle : title of the input
inputValue : value of each input
type : type of input
variant : used to choose the style to apply : light, dark or error 
*/ 
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
