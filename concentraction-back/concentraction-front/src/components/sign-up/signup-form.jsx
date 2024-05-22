/** Organism in charge of the sign-up and log-in logic. It includes several inputs registered with react hook form  */
import { useEffect } from "react";
import Checkbox from "../input/checkbox.jsx";
import { Input } from "../input/input.jsx";
import { Button } from "../button.jsx";
import { Link } from "../links.jsx";
import { Heading1 } from "../typography.jsx";
import { useForm } from "react-hook-form";

//redirecting from react router
import { useNavigate } from "react-router-dom";

//Apollo client import
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../services/queries.jsx";

export function SignUpForm({ logIn }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [addUser, { data, loading, error }] = useMutation(ADD_USER, {
    onCompleted: (data) => {
      if (data.success == true && data.token != null) {
        const token = data.token;
        sessionStorage.setItem("token", token);
        //needs to add redirection
        navigate("/dashboard");
      }
    },
  });
  //useeffect ?
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
    }
  };
  return (
    <>
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
        <Link variant="fineprint" onClick={logIn}>
          Already have an account? Log in
        </Link>
      </form>
    </>
  );
}
