import { Heading4, Fineprint } from "./typography";
import { FooterLink } from "./footerLink";
import IconifyIcon from "./icon";


export default function Footer() {
  return (
    <footer className=" absolute w-full h-1/12 self-end flex justify-between border-solid border-t border-brand-blue">
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
        <div className="socials ">
        <a href="#" aria-label="facebook" rel="noreferrer" target="_blank"><IconifyIcon iconName="arcticons:facebook" width={20} height={20}></IconifyIcon></a>
        <IconifyIcon iconName="arcticons:instagram" width={20} height={20}></IconifyIcon> 
        <IconifyIcon iconName="arcticons:linkedin" width={20} height={20}></IconifyIcon>
        </div>
        <Fineprint>Copyright @2024</Fineprint>
      </div>
    </footer>
  );
}
