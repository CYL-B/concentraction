import { NavLink } from "react-router-dom";

//NavLinkStyle : general style of the element
//navLinkActiveStyle : style applied when element is active

export default function NavElement({ dest, children }) {
  const navLinkStyle =
    "flex gap-1 font-anton text-lg leading-4  md:leading-9 xl:text-2xl xl:leading-10 text-brand-blue  border border-solid border-transparent hover:border-brand-blue hover:rounded";

  const navLinkActiveStyle =
    "active rounded p-2 text-neutral-white bg-brand-blue";
  return (
    <li className="inline-flex">
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
