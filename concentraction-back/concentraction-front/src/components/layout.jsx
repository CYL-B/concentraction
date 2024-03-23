import { Header } from "./header";
import  {NavBar}  from "./navigation/navBarDesktop";

function Container({ children, className }) {
  return <div className={`container ${className}`}>{children}</div>;
}

export default function Layout({
  children,
  containerClassName,
  headerTitle,
  mainClassName,
  id,
  pageClassName
}) {
  return (
    <div id={id} className="flex h-screen w-screen">
    <NavBar></NavBar>
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