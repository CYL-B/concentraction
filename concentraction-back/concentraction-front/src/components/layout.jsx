import { Header } from "./header";

function Container({ children, className }) {
  return <div className={`container ${className}`}>{children}</div>;
}

export default function Layout({ children, containerClassName, headerTitle }) {
  return (
    <>
    <Header headerTitle={headerTitle}></Header>
      <div className={`container mx-auto ${containerClassName ?? ""}`}>
        {children}
      </div>
    </>
  );
}
