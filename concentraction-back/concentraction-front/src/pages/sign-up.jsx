import { SignUpForm } from "../components/input/signup-form"
import { SignUpImage } from "../components/sign-up-image"
export default function SignUp() {

    return (
      <>
        <div id="Sign-up" className="sign-up flex flex-col gap-3 items-center justify-between bg-center bg-sign-up-mobile bg-no-repeat bg-cover overflow-hidden w-screen h-screen lg:bg-sign-up-desk lg:flex-row lg:gap-2 lg:px-40">
          <SignUpImage/>
          <SignUpForm/>
        </div>
      </>
    )
  }
    