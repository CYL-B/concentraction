import { Header } from "./header";

function Container({ children, containerClassName }) {
  return <div className={`container ${containerClassName}`}>{children}</div>;
}

export function Layout({ children, containerClassName }) {
  return (
    <>
      <Header></Header>
      <Container containerClassName={containerClassName}>{children}</Container>
    </>
  );
}
