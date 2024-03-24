import { NavLink } from "react-router-dom";
import IconifyIcon from "../icon";
import { useContext } from "react";
import { ToggleContext } from "./navContext";

//NavLinkStyle : general style of the element
//navLinkActiveStyle : style applied when element is active

export function NavElement({ dest, children,...restProps }) {
  const navLinkStyle =
    "flex items-center gap-1 font-anton text-lg leading-4  md:leading-9 xl:text-2xl xl:leading-10 text-brand-blue  border border-solid border-transparent hover:border-brand-blue hover:rounded";

  const navLinkActiveStyle =
    "active rounded p-2 text-neutral-white bg-brand-blue";
  return (
    <li className="inline-flex" {...restProps}>
      <NavLink
        to={`/${dest}`}
        className={({ isActive, isPending, isTransitioning }) =>
          [
            `${navLinkStyle}`,
            isPending ? "pending" : "",
            isActive ? `${navLinkActiveStyle}` : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

//navMenuList : array with all the elements within the navBar except buttons, it iterates over navElementList and creates a NavElement for each object and properties inside the array. The span element disappears (opacity 0) when reduced.

const navElementList = [
  {
    destination: "backlog",
    labelName: "Backlog",
    iconifyName: "material-symbols-light:add-notes-outline-rounded",
    id:"1"
  },
  {
    destination: "pomodoro",
    labelName: "Pomodoro",
    iconifyName: "material-symbols-light:timer-outline-rounded",
    id:"2"
  },
  {
    destination: "dashboard",
    labelName: "Dashboard",
    iconifyName: "material-symbols-light:date-range-outline",
    id:"3"
  },
];

export function NavMenuList() {
  const toggling = useContext(ToggleContext);

  const navMenuElementList = navElementList.map((navElement) => (
    <NavElement key={navElement.id} dest={`${navElement.destination}`}>
      <IconifyIcon
        iconName={`${navElement.iconifyName}`}
        iconClassName={`navIcon`}
      />
      <span
        className={`navLabel transition-opacity duration-500 ease-in-out ${
          toggling ? "opacity-0" : "opacity-100 "
        }`}
      >
        {navElement.labelName}
      </span>
    </NavElement>
  ));

  return (
    <>
    {navMenuElementList}
    </>
    );
}
