import { Body } from "../typography";
//Integrating existing inputs https://react-hook-form.com/get-started#Integratinganexistingform
/*
register: props required to pass register function from react hook form
required : part of the register function
name : name, id and HTMLFOR of element
inputValue : value of each input
type : type of input
variant : used to choose the style to apply : light, dark or error 
*/

export function Input({
  register,
  name,
  required = false,
  placeholder,
  minLength,
  inputValue,
  isNotCustomComponent = true,
  type,
  variant ="",
  error,
  handleChange,
  ...inputProps
}) {
  let titleHeading = "";
  if (variant == "text-dark") {
    titleHeading = "text-neutral-white";
  } else if (variant == "text-error") {
    titleHeading = "text-brand-red";
  } else {
    titleHeading = "text-neutral-black";
  }

  return (
    <fieldset className="input-wrapper flex flex-col gap-2 w-fit" {...isNotCustomComponent}>
      <Body body2={true} classBody={`font-bold ${titleHeading}`}>
        {" "}
        {name}
      </Body>
      <label htmlFor={name}>
        <input
          {...register(name, {required: required}, {minLength: minLength})}
          type={type}
          className={`${variant}`}
          id={name}
          placeholder={placeholder}
          onChange={handleChange}
          {...inputProps}
        ></input>
      </label>
    </fieldset>
  );
}

export function TextArea({
  register,
  required,
  name,
  placeholder,
  textValue,
  type,
  variant = "text-light",
  error,
  handleTextChange,
  ...textProps
}) {
  // const [textarea, setTextarea] = useState(
  //     "The content of a textarea goes in the value attribute"
  //   );

  //   const handleChange = (event) => {
  //     setTextarea(event.target.value)
  //   }

  let titleHeading = "";
  if (variant == "text-dark") {
    titleHeading = "text-neutral-white";
  } else if (variant == "text-error") {
    titleHeading = "text-brand-red";
  } else {
    titleHeading = "text-neutral-black";
  }

  return (
    <fieldset className="text-wrapper flex flex-col gap-2">
      <Body body2={true} classHeading={`font-bold ${titleHeading}`}>
        {name}
      </Body>
      <label htmlFor={name}>
        <textarea
        {...register(name)}
          className={`${variant.toLowerCase()}`}
          type={type}
          onChange={handleTextChange}
          {...textProps}
          placeholder={placeholder}
          value={textValue}
        />
      </label>
    </fieldset>
  );
}
