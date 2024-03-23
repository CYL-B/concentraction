import { useState } from "react";

import  Divider  from "./divider";
import { SignOutButton } from "./navButtons";
import NavElement from "./navBarElement";
import IconifyIcon from "../icon";


//isToggle state : when true, navBar is reduced, if not, navBar is normal
//navBarStyle general style of the navBar. Width changes when reduced. 
//NavBarBefore and After : create one horizontal line and vertical line to style the navBar. Shadow property is used to create the effect of a very light line (cannot be accomplished with border)
//navBarClass combines all of the above classes.
//navMenuList : array with all the elements within the navBar except buttons, it iterates over navElementList and creates a NavElement for each object and properties inside the array. The span element disappears (opacity 0) when reduced. 
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

  const navElementList = [
    {
      destination: "backlog",
      labelName: "Backlog",
      iconifyName: "material-symbols-light:add-notes-outline-rounded",
    },
    {
      destination: "pomodoro",
      labelName: "Pomodoro",
      iconifyName: "material-symbols-light:timer-outline-rounded",
    },
    {
      destination: "dashboard",
      labelName: "Dashboard",
      iconifyName: "material-symbols-light:date-range-outline",
    },
  ];

  const navMenuList = navElementList.map((navElement) => (
    <NavElement dest={`${navElement.destination}`}>
      <IconifyIcon
        iconName={`${navElement.iconifyName}`}
        iconClassName={`navIcon`}
      />
      <span
        className={`navLabel transition-opacity duration-500 ease-in-out ${isToggle?"opacity-0":"opacity-100 "}`}
      >
        {navElement.labelName}
      </span>
    </NavElement>
  ));
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
