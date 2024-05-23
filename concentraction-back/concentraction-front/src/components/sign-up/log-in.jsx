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
import { LOGIN } from "../../services/queries.jsx";

export function LogInForm({ signUp }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [login, { data, loading, error }] = useMutation(LOGIN, {
    onCompleted: (data) => {
      if (data.success == true && data.token != null) {
        const token = data.token;
        sessionStorage.setItem("token", token);
        //redirection
        navigate("/dashboard");
      }
    },
  });

  const onSubmit = (loginData) => {
    try {
      login({
        variables: {
          content: { email: loginData.email, password: loginData.password },
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
      <Heading1>Log in</Heading1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="email"
          register={register}
          aria-invalid={errors.example1 ? "true" : "false"}
          required
        />
        <Input name="password" register={register} required />
        <Checkbox name="Data" register={register} required />
        <Button role="submit" type="submit" />
        <Link variant="fineprint" onClick={signUp}>
          Don't have an account? Sign up !{" "}
        </Link>
      </form>
    </>
  );
}
