/** Organism in charge of the sign-up and log-in logic. It includes several inputs registered with react hook form  */
import { useState } from "react";
import Checkbox from "../input/checkbox.jsx";
import { Input } from "../input/input.jsx";
import { Button } from "../button.jsx";
import { Heading1 } from "../typography.jsx";
import { useForm } from "react-hook-form";

//redirecting from react router
import { useNavigate } from 'react-router-dom';


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

  const navigate = useNavigate();

  const [addUser, { data, loading, error }] = useMutation(ADD_USER, {
    onCompleted: (data) => {
      console.log(data);
      const token = data.token;
      sessionStorage.setItem("token", token);
      //needs to add redirection
      navigate("/dashboard")
    },
  });

  const onSubmit = (data) => {
    try {
      addUser({
        variables: {
          name: data.Nom,
          content: { email: data.Email, password: data.Password },
        },
      });
    } catch (res) {
      const errors = res.graphQLErrors.map((error) => {
        return error.message;
      });
      console.error("GraphQL Errors:", errors);
    }
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
        {/* <Input
          placeholder="Prénom"
          name="Prénom"
          register={register}
          required={true}
          type="text"
        /> */}
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
        <Button role="submit" type="submit">
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
