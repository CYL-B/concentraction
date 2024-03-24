import { Header } from "./header";
import NavBar from "./navigation/navBar";

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
    <div id={id} className="flex h-screen w-screen">
      <NavBar />

      <div className={`wrapper relative p-10 ${pageClassName ?? ""}`}>
        <Header headerTitle={headerTitle}></Header>
        <div className={`container mx-auto ${containerClassName ?? ""}`}>
          <main role="main" className={`w-full ${mainClassName ?? ""}`}>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
//?? : if value on the left is defined, it returns said value, if not, returns value on the right
