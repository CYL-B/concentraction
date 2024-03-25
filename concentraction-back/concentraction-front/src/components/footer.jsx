import { Heading4, Fineprint } from "./typography";
import { FooterLink } from "./footerLink";
import IconifyIcon from "./icon";

export default function Footer() {
  return (
    <footer className="w-full h-1/12 flex justify-between border-solid border-t border-brand-blue fixed bottom-0">
      <div className="min-w-[30%]">
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
      <div className="flex flex-col items-between min-w-[30%]">
        <div className="socials ">
        <IconifyIcon iconName="arcticons:facebook"></IconifyIcon>
        <IconifyIcon iconName="arcticons:instagram"></IconifyIcon> 
        <IconifyIcon iconName="arcticons:linkedin"></IconifyIcon>
        </div>
        <Fineprint>Copyright @2024</Fineprint>
      </div>
    </footer>
  );
}
