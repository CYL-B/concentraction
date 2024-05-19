/** Buttons in the navbar */
import { Button } from "../button";
import IconifyIcon from "../icon";

import { useContext } from "react";
import { ToggleContext } from "./navContext";

//Button to sign out
//reduced : property that changes depending on the state of the menu (reduced or not).
export function SignOutButton({ reduced = false }) {
  //log out logic > https://www.apollographql.com/docs/react/networking/authentication/#header
  const signOut = () => {
    localStorage.removeItem('token');
  };
  return (
    <li>
      <Button variant="primary" isIcon={reduced} onClick={signOut}>
        {reduced ? (
          <IconifyIcon iconName="material-symbols-light:logout-sharp" />
        ) : (
          "Sign-Out"
        )}
      </Button>
    </li>
  );
}

export function TopButton({ toggleNavBar }) {
  const toggling = useContext(ToggleContext);

  return (
    <button onClick={toggleNavBar} className="hidden lg:block">
      <IconifyIcon
        iconName={`${
          toggling
            ? "material-symbols-light:keyboard-double-arrow-right"
            : "material-symbols-light:keyboard-double-arrow-left"
        }`}
        iconClassName={` first:text-brand-blue border border-solid border-brand-blue rounded-full w-10 h-10`}
      />
    </button>
  );
}

export function TopButtonMobile({ topButtonFunction }) {
  return (
    <button
      className="lg:hidden border-solid border border-brand-blue rounded-full w-20 h-20 fixed top-4 left-3 z-50 flex flex-col items-center justify-center gap-3 px-4"
      onClick={topButtonFunction}
    >
      <div className="self-start w-5 h-[1px] bg-brand-blue"></div>
      <div className="w-10 h-[1px] bg-brand-blue"></div>
      <div className="self-end w-5 h-[1px] bg-brand-blue"></div>
    </button>
  );
}
