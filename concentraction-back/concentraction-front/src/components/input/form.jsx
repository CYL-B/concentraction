import { Input, FieldSet } from "./input";
import { Dropdown, Option } from "./dropdown";
import { TextArea } from "./textarea";
import { AddButton } from "../button";
import { useForm , SubmitHandler} from "react-hook-form";

//watch : watch input value by passing the name of it
//"handleSubmit" will validate your inputs before invoking "onSubmit"
//register : register your input into the hook by invoking the "register" function 
//include validation with required or other standard HTML validation rules
//errors.nameOfInput : {/* errors will return when field validation fails  */}

export function Form({}) {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldSet>
        <Input {...register("example")} />
       <Dropdown {...register("dropdown example"), {required:true}}>
        <Option value="Option 1">Option 1</Option>
        </Dropdown>
      </FieldSet>
      <AddButton role="submit"></AddButton>
    </form>
  );
}
