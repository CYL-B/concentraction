import React from "react";
import { Input, FieldSet } from "./input";
import { AddButton } from "../button";
import { useForm , Form} from "react-hook-form";

//watch : watch input value by passing the name of it
//"handleSubmit" will validate your inputs before invoking "onSubmit"
//register : register your input into the hook by invoking the "register" function 
//include validation with required or other standard HTML validation rules
//errors.nameOfInput : {/* errors will return when field validation fails  */}

export function CustomForm({}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //object that contains several input values

  //   const [inputValue, setInputValue] = useState({});

  //   const handleChange = (event) => {
  //     const name = event.target.name;
  //     const value = event.target.value;
  //     setInputValue((values) => ({ ...values, [name]: value }));
  //   };



  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form action ="/api"
    method="post"
    onSubmit={handleSubmit(onSubmit)}
    onSuccess
    onError
    validateStatus>
      <FieldSet>
        <Input type="number" inputName="example1" register={register} aria-invalid={errors.example1 ? "true" : "false"}/>
        <Input inputName="example2" register={register} required />
       
      </FieldSet>
      <AddButton role="submit"></AddButton>
    </Form>
  );
}


export function FormTwo ({defaultValues, children, onSubmit}) {
  const { handleSubmit, register } = useForm({ defaultValues });
  const childrenArray = React.Children.toArray(children);

  console.log("register", register)
  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      {childrenArray.map((child) => {
        return child.props.inputName ?
        React.createElement(child.type, {
          ...{
            ...child.props,
            register,
            key:child.props.name,
          }
        })
        :child
      })}

    </form>
  )
}