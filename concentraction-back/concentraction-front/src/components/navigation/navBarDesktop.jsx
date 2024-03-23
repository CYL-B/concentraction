import { useState } from "react";
import  Divider  from "./divider";
import { SignOutButton } from "./navButtons";
import {navMenuList} from "./navBarElement";
import IconifyIcon from "../icon";


//isToggle state : when true, navBar is reduced, if not, navBar is normal
//navBarStyle general style of the navBar. Width changes when reduced. 
//NavBarBefore and After : create one horizontal line and vertical line to style the navBar. Shadow property is used to create the effect of a very light line (cannot be accomplished with border)
//navBarClass combines all of the above classes.
//topButton : icon within button wrapper changes according to the state of the navBar, reduced or not.

export function NavBar() {
  const [isToggle, setToggle] = useState(false);

  const toggleNavBar = () => {
    setToggle(!isToggle);
    console.log(isToggle);
  };

  const navBarStyle = `navbar transition-[width] duration-500 ease-in-out ${
    isToggle ? "reduced w-20" : "w-64"
  } flex flex-col overflow-hidden  h-full relative top-0 left-0 bg-neutral-white shadow-brand-blue shadow-[1px_0px_1px_-1px]`;
  const navBarBefore =
    " before:absolute before:w-[105%] before:h-[5%] before:shadow-brand-blue before:shadow-[0px_1px_1px_-1px]";
  const navBarAfter =
    "after:absolute after:h-5/6 after:w-[5%] after:shadow-brand-yellow after:shadow-[1px_0px_1px_-1px] after:top-0 after:right-3";

  const navBarClass = `${navBarStyle} ${navBarBefore} ${navBarAfter}`;

  
  return (
    <nav className={navBarClass}>
      <ul
        className={`sticky p-5 top-0 left-0 w-full h-full z-0 flex flex-col justify-evenly items-start`}
      >
        <button onClick={() => toggleNavBar()}>
          <IconifyIcon
            iconName={`${
              isToggle
                ? "material-symbols-light:keyboard-double-arrow-right"
                : "material-symbols-light:keyboard-double-arrow-left"
            }`}
            iconClassName={` first:text-brand-blue border border-solid border-brand-blue rounded-full w-10 h-10`}
          />
        </button>

        {navMenuList}
        <Divider/>
        <SignOutButton reduced={isToggle} />
      </ul>
    </nav>
  );
}
