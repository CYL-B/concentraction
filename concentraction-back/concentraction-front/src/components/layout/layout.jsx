import { Header } from "./header";
import Footer from "./footer";
import NavBar from "../navigation/navBar";

//useMediaQuery(mediaQueriesSizes.md) vérifie si le viewport est inférieur à mediaQueriesSizes.md (768px). Si oui, returns navBarMobile sinon, navBarDesktop

export default function Layout({
  children,
  containerClassName,
  headerTitle,
  mainClassName,
  id,
  pageClassName,
}) {
  return (
    <div id={id} className="layout flex h-screen w-screen bg-background">
      <NavBar />

      <main role="main" className={`relative p-10 overflow-y-scroll overflow-x-hidden box-border ${mainClassName ?? ""}`}>
        <Header headerTitle={headerTitle}></Header>
        <div className={`container mx-auto ${containerClassName ?? ""}`}>
          <div className={`w-full ${ pageClassName?? ""}`}>
            {children}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
//?? : if value on the left is defined, it returns said value, if not, returns value on the right
