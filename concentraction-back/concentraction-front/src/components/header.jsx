import { Heading2 } from "./typography";

export function Header({headerTitle }) {
  return (
    <header className="mx-auto w-full">
      <Heading2 text={headerTitle} heading2ClassName="text-center"></Heading2>
    </header>
  );
}
