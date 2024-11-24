import IconifyIcon from "../icon";
import { Body } from "../typography";

export function MiniCard({ taskName }) {
  return (
    <div className="miniCardContainer flex items-center gap-x-5 p-2 bg-brand-red border border-solid border-neutral-black rounded-xl">
      <Body classBody="font-bold text-neutral-white">{taskName}</Body> <IconifyIcon height={10 } width={10}iconName="material-symbols:arrow-forward-ios"iconClassName="text-neutral-white"/>
    </div>
  );
}
