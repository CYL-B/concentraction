/** Organism in charge of the sign-up and log-in logic. It includes several inputs registered with react hook form  */
import Checkbox from "./checkbox";
import { Input } from "./input";
import { Button } from "../button";
import { Heading1 } from "../typography";
import { useForm } from "react-hook-form";

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
    <div className="border-[5px] border-neutral-black flex flex-col items-center justify-around gap-1 p-4 rounded bg-neutral-white h-[90%] overflow-scroll w-[80%] mb-3
     lg:self-center lg:px-[140px] lg:gap-10">
      <Heading1>Sign Up</Heading1>
      <form
        className="flex flex-col gap-1 lg:gap-8 items-center justify-between w-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          placeholder="Nom"
          name="Nom"
          register={register}
          required={true}
          type="text"
          aria-invalid={errors.example1 ? "true" : "false"}
        />
        <Input
          placeholder="Prénom"
          name="Prénom"
          register={register}
          required={true}
          type="text"
        />
        <Input
          placeholder="Email"
          name="Email"
          register={register}
          required={true}
          type="email"
        />
        <Input
          placeholder="Password"
          name="Password"
          register={register}
          required={true}
          type="password"
          minLength={8}
        />

        <Checkbox name="Data" register={register} />
        <Button role="submit" type="button">
          Sign up
        </Button>
      </form>
    </div>
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
