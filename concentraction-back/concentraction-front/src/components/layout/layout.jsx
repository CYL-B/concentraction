import { Header } from "./header";
import Footer from "./footer";
import NavBar from "../navigation/navBar";
import Scrolltop from "../scrolltop";

import { useRef } from "react";

//useMediaQuery(mediaQueriesSizes.md) vérifie si le viewport est inférieur à mediaQueriesSizes.md (768px). Si oui, returns navBarMobile sinon, navBarDesktop

export default function Layout({
  children,
  containerClassName,
  headerTitle,
  mainClassName,
  id,
  pageClassName,
}) {

  const ref= useRef(null);
  const scrollToMain = () => {

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
    <div id={id} className="layout flex w-screen h-auto bg-background">
      <NavBar />
      <main 
        role="main"
        className={`relative z-10 p-10 box-border overflow-x-hidden overflow-y-visible${
          mainClassName ?? ""
        }`}
      >
        <Header headerTitle={headerTitle}></Header>
        <div className={`container mx-auto ${containerClassName ?? ""}`}>
          <div className={`w-full ${pageClassName ?? ""}`}>{children}</div>
        </div>
        <Footer />
      </main>
      <Scrolltop scrollToTop={scrollToMain} />
    </div>
    </>
  );
}
//?? : if value on the left is defined, it returns said value, if not, returns value on the right
