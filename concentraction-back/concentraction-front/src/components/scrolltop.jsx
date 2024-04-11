import ScrollTopVector from "../assets/ScrollTopVector.svg?react";

export default function Scrolltop({ scrollToTop }) {
  return (
    <button
      onClick={scrollToTop}
      className="scrolltop group m-auto w-10 h-20 fixed bottom-0 right-0 z-[666]"
    >
      <ScrollTopVector className="w-full" />
      <span className="block font-anton text-base leading-6 group-hover:text-brand-blue transition-all duration-300 ease-in-out w-full">
        UP
      </span>
    </button>
  );
}
