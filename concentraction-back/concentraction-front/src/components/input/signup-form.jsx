/** Organism in charge of the sign-up and log-in logic. It includes several inputs registered with react hook form  */
import Checkbox from "./checkbox";
import { Input } from "./input";
import { Button } from "../button";
import { Heading1 } from "../typography";
import { useForm } from "react-hook-form";

//Apollo client import
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../services/queries.jsx";

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [addUser, { loading, error }] = useMutation(ADD_USER, {
    onCompleted: (data) => {
      const token = data.token;
      sessionStorage.setItem('token', token);
      //needs to add redirection
    },
  });

  const onSubmit = (data) => {
    addUser({variables:{name: data.Nom, user: data}})
    console.log(data);
  };
  return (
    <div
      className="border-[5px] border-neutral-black flex flex-col items-center justify-around gap-1 p-4 rounded bg-neutral-white h-[90%] overflow-scroll w-[80%] mb-3
      lg:px-[140px] lg:gap-10 lg:w-3/5 lg:mb-0"
    >
      <Heading1>Sign Up</Heading1>
      <form
        className="flex flex-col gap-1 lg:gap-8 items-center justify-between w-full"
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
