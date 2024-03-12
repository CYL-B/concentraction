import { Header } from "./header";

function Container({ children, className }) {
  return <div className={`container ${className}`}>{children}</div>;
}

export default function Layout({ children, containerClassName, headerTitle, mainClassName }) {
  return (
    <>
    <Header headerTitle={headerTitle}></Header>
      <div className={`container mx-auto ${containerClassName ?? ""}`}>
        <aside className="md:w-1/6">

        </aside>
        <main role="main" className={`w-full ${mainClassName ?? ""}`}>
        {children}
        </main>
      </div>
    </>
  );
}
