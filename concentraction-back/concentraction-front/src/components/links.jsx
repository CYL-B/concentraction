
const variantMaps = {
  primary: "font-bold text-brand-blue text-base leading-6",
  secondary: "font-bold text-base leading-6 text-neutral-white",
  fineprint: "text-brand-blue text-xs leading-[18px]",
};

export function Link({ onClick, variant, children }) {
  const linkLayoutClasses =
    "font-nunito hover:underline focus:outline-offset-1";

  const finalLinkClasses = `${linkLayoutClasses} ${
    variantMaps[variant.toLowerCase()]
  }`;

  return (
    <a href="#" role="button" onClick={onClick} className={finalLinkClasses}>
      <span>{children}</span>
    </a>
  );
}
