import { Heading2 } from "../typography";
import { Divider } from "../divider";

export function Header({headerTitle }) {
  return (
    <header className="w-full flex flex-col items-center">
      <Heading2 text={headerTitle} heading2ClassName="text-center pb-8"></Heading2>
      <Divider/>
    </header>
  );
}
