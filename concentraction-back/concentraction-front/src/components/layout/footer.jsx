/** Footer component which comprises : 
 * footerLink : links to other pages
 * socialList : links to social media
 */
import { Heading4, Fineprint } from "../typography";
import { FooterLink } from "./footerLink";
import IconifyIcon from "../icon";

export default function Footer() {
  const socialElements = [
    {
      href: "#",
      ariaLabel: "facebook",
      iconName: "arcticons:facebook",
      id:"facebook"
    },
    {
      href: "#",
      ariaLabel: "linkedin",
      iconName: "arcticons:linkedin",
      id:"linkedin"
    },
    {
      href: "#",
      ariaLabel: "instagram",
      iconName: "arcticons:instagram",
      id:"instagram"
    },
  ];

  const socialList = socialElements.map((element) => (
    <a
      href={element.href}
      aria-label={element.ariaLabel}
      key={element.id}
      rel="noreferrer"
      target="_blank"

    >
      <IconifyIcon
        iconName={element.iconName}
        width={24}
        height={24}
      ></IconifyIcon>
    </a>
  ));
  return (
    <footer className=" absolute bottom-0 w-full h-14 self-end flex justify-between border-solid border-t border-brand-blue p-2">
      <div className="min-w-[30%] flex flex-col justify-center">
        <Heading4 classHeading={"text-brand-blue uppercase"}>
          Concentraction
        </Heading4>
      </div>
      <div className="flex items-end justify-between min-w-[30%]">
        <FooterLink dest={"sitemap"}>Sitemap</FooterLink>
        <FooterLink dest={"terms-and-conditions"}>
          Terms and Conditions
        </FooterLink>
      </div>
      <div className="flex flex-col justify-between items-center min-w-[30%]">
        <div className="socials ">{socialList}</div>
        <Fineprint classFineprint={"text-brand-blue"}>
          Copyright @2024
        </Fineprint>
      </div>
    </footer>
  );
}
