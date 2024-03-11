import { Heading2 } from "./typography";

export function Header({ title }) {
  return (
    <Header className="mx-auto w-full">
      <Heading2 content={title}></Heading2>
    </Header>
  );
}
