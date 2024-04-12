import { Fineprint } from "./typography";
export default function Tag({children}) {
  return (
    <div className=" h-fit w-fit bg-neutral-white border border-solid border-neutral-black rounded-3xl px-2">
      <Fineprint classFineprint="font-bold capitalize">{children}</Fineprint>
    </div>
  );
}
