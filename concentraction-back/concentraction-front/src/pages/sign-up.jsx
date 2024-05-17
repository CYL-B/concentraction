import { SignUpForm } from "../components/input/signup-form"
import { SignUpImage } from "../components/sign-up-image"
export default function SignUp() {

    return (
      <>
        <div id="Sign-up"className="sign-up lg:grid lg:grid-cols-2 lg:gap-2 overflow-hidden w-screen h-screen">
          <SignUpImage/>
          <SignUpForm/>
        </div>
      </>
    )
  }
    