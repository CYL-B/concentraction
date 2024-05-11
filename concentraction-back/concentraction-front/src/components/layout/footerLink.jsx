/** FooterLink with element Link from react-router-dom : allows user to navigate to another page */
import { Link } from "react-router-dom";

export function FooterLink({ dest, children }) {
  return (
    <Link
      to={`/${dest}`}
      className="text-brand-blue text-xs leading-[18px] font-nunito hover:underline focus:outline-offset-1"
    >
      {children}
    </Link>
  );
}
