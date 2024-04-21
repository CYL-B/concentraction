import Checkbox from "./checkbox";
import { Input, TextArea } from "./input";
import { CustomDropdown } from "./dropdown";
import { AddButton } from "../button";
import { useForm, Controller } from "react-hook-form";

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="Nom"
        register={register}
        aria-invalid={errors.example1 ? "true" : "false"}
      />
      <Input name="Prénom" register={register} required />
      <Input name="Email" register={register} required />
      <Input name="Password" register={register} required />

      <Checkbox name="Data" register={register} />
      <AddButton role="submit" />
    </form>
  );
}

export function LogInForm() {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="email"
        register={register}
        aria-invalid={errors.example1 ? "true" : "false"}
      />
      <Input name="Password" register={register} required />
      <AddButton role="submit" />
    </form>
  );
}
