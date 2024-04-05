import React from "react";
import { Input } from "./input";
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
      
        <Input type="number" inputName="example1" register={register} aria-invalid={errors.example1 ? "true" : "false"}/>
        <Input inputName="example2" register={register} required />
       

      <AddButton role="submit"></AddButton>
    </Form>
  );
}

//receives children inputs : dropdown, textarea...
//said children must be registered and receive a register prop in order for the form to pass down methods from react hook forms

export function FormTwo ({defaultValues, children, onSubmit}) {
  const { handleSubmit, register } = useForm({ defaultValues });

  //to map on children, it needs to be converted into an array thanks to the react method react.children.toArray
  const childrenArray = React.Children.toArray(children);
  
  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      {childrenArray.map((child) => {
        return child.props.name ?
        React.createElement(child.type, {
          ...{
            ...child.props,
            register,
            key:child.props.name,
          }
        })
        :child
      })
      }

    </form>
  )
}

//React.createElement : create each element of its specific type, copies its props