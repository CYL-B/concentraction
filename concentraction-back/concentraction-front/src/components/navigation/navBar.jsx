import { useState } from "react";
import  Divider  from "./divider";
import { SignOutButton, TopButton, TopButtonMobile } from "./navButtons";
import {NavMenuList} from "./navBarElement";
import Logo from "../../assets/logo.svg?react";


import { ToggleContext } from "./navContext";

//isToggle state : when true, navBar is reduced, if not, navBar is normal
//navBarStyle general style of the navBar. Width changes when reduced. 
//NavBarBefore and After : create one horizontal line and vertical line to style the navBar. Shadow property is used to create the effect of a very light line (cannot be accomplished with border)
//navBarClass combines all of the above classes.
//topButton : icon within button wrapper changes according to the state of the navBar, reduced or not.

export default function NavBar() {
  const [isToggle, setToggle] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const toggleNavBar = () => {
    setToggle(!isToggle);
  };

  const showNavBar = () => {
    setIsShown(!isShown);
  
  };
  const navBarStyle = `w-screen fixed lg:relative z-20 z-1 transition-all duration-500 ease-in-out  ${
    isToggle ? "lg:w-20" : "lg:w-64"
  } ${
    isShown ? "translate-x-0" : "-translate-x-[100%]"
  } lg:translate-x-0 flex flex-col overflow-hidden  h-full top-0 left-0 bg-neutral-white shadow-brand-blue shadow-[1px_0px_1px_-1px]`;

  const navBarBefore =
    " before:absolute before:w-[95%] lg:before:w-[105%] before:h-[5%] before:shadow-brand-blue before:shadow-[0px_1px_1px_-1px]";
  const navBarAfter =
    "after:absolute after:h-5/6 after:w-[5%] after:shadow-brand-yellow after:shadow-[1px_0px_1px_-1px] after:top-0 after:right-3";

  const navBarClass = `${navBarStyle} ${navBarBefore} ${navBarAfter}`;

  
  return (
    <ToggleContext.Provider value={isToggle}>
      <TopButtonMobile topButtonFunction={showNavBar}/>
    <nav className={navBarClass}>
      <ul
        className={`static lg:sticky p-5 top-0 left-0 w-full h-full z-0 flex flex-col justify-evenly items-center lg:items-start`}
      >
        <TopButton toggleNavBar={toggleNavBar}/>

        <NavMenuList/>
        <Divider/>
        <SignOutButton reduced={isToggle} />
        <Logo/>
      </ul>
    </nav>
    </ToggleContext.Provider>
  );
}
