import { NavMenuList } from "./navBarElement";
import { SignOutButton, TopButtonMobile } from "./navButtons";
import { useState } from "react";
import Divider from "./divider";

export default function NavBarMobile() {
  const [isShown, setIsShown] = useState(false);

  const showNavBar = () => {
    setIsShown(!isShown);
    console.log("shown", isShown);
  };

  const navBarStyle = `w-screen fixed z-20 transition-transform duration-500 ease-in-out ${
    isShown ? "translate-x-0" : "-translate-x-[100%]"
  } flex flex-col h-full top-0 left-0 bg-neutral-white shadow-brand-blue shadow-[1px_0px_1px_-1px]`;
  const navBarBefore =
    " before:absolute before:w-[95%] before:h-[5%] before:shadow-brand-blue before:shadow-[0px_1px_1px_-1px]";
  const navBarAfter =
    "after:absolute after:h-5/6 after:w-[5%] after:shadow-brand-yellow after:shadow-[1px_0px_1px_-1px] after:top-0 after:right-3";

  const navBarClass = `${navBarStyle} ${navBarBefore} ${navBarAfter}`;

  return (
    <>
      <TopButtonMobile topButtonFunction={showNavBar} />
      <nav className={navBarClass}>
        <ul
          className={`p-5 w-full h-full flex flex-col justify-evenly items-center`}
        >
          <NavMenuList />
          <Divider/>
          <SignOutButton />
        </ul>
      </nav>
    </>
  );
}
