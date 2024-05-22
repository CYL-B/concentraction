import { useState } from "react";
import { SignUpForm } from "../components/sign-up/signup-form";
import { LogInForm } from "../components/sign-up/log-in";
import { SignUpImage } from "../components/sign-up/sign-up-image";
export default function SignUp() {
  const [toggleAuth, setToggleAuth] = useState(false);

  return (
    <>
      <div
        id="Sign-up"
        className="sign-up flex flex-col gap-3 items-center justify-between bg-center bg-sign-up-mobile bg-no-repeat bg-cover overflow-hidden w-screen h-screen lg:bg-sign-up-desk lg:flex-row lg:gap-2 lg:px-40"
      >
        <SignUpImage />
        <div
          className="border-[5px] border-neutral-black flex flex-col items-center justify-around gap-1 p-4 rounded bg-neutral-white h-[90%] overflow-scroll w-[80%] mb-3
      lg:px-[140px] lg:gap-10 lg:w-3/5 lg:mb-0"
        >
          {toggleAuth ? <SignUpForm logIn={()=>setToggleAuth(false)} /> : <LogInForm signUp={()=>setToggleAuth(true)} />}
        </div>
      </div>
    </>
  );
}
