import { Header } from "./header";

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
    <>
      <div id={id} className={`relative p-10 ${pageClassName ?? ""}`}>
        <Header headerTitle={headerTitle}></Header>
        <div className={`container mx-auto ${containerClassName ?? ""}`}>
          <aside className="absolute h-screen top-0 left-0 md:w-1/6"></aside>
          <main role="main" className={`w-full ${mainClassName ?? ""}`}>
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
