import { Header } from "./header";

function Container({ children, className }) {
  return <div className={`container ${className}`}>{children}</div>;
}

export function Layout({ children, className }) {
  return (
    <>
      <Header></Header>
      <Container className={className}>{children}</Container>
    </>
  );
}
