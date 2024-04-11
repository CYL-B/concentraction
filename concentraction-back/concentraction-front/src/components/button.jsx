import IconifyIcon from "./icon";

const variantMaps = {
  primary:
    "bg-brand-red text-neutral-white border-brand-red hover:bg-neutral-white hover:text-brand-red",
  secondary:
    "bg-neutral-white text-brand-blue border-brand-blue hover:bg-brand-blue hover:text-neutral-white",
};

export function Button({
  onClick,
  variant = "primary",
  label = "Test",
  type = "btnAnchor",
  ...restProps
}) {
  const buttonLayoutClasses =
    "btn font-anton rounded-md text-base leading-6 text-center border-[3px] border-solid align-middle px-11 py-5 w-auto h-auto focus:outline focus:outline-solid focus:ring-brand-yellow";

  const finalButtonClasses = `${buttonLayoutClasses} ${type} ${
    variantMaps[variant.toLowerCase()]
  }`;

  if (type == "btnAnchor") {
    return (
      <a
        href="#"
        role="button"
        onClick={onClick}
        className={finalButtonClasses}
        {...restProps}
      >
        {label}
      </a>
    );
  } else {
    return (
      <button
        role="button"
        onClick={onClick}
        className={finalButtonClasses}
        {...restProps}
      >
        {label}
      </button>
    );
  }
}

export function AddButton({ onClick, children, addText= true }) {
  return (
    <button className="flex items-center justify-center gap-3 hover:last:underline" onClick={onClick} role="button">
      <IconifyIcon
        iconClassName="first:text-neutral-white first:hover:text-brand-blue border border-solid border-brand-blue rounded-full w-10 h-10 bg-brand-blue hover:bg-neutral-white flex w-fit"
        iconName="material-symbols-light:add-rounded"
      />
      {addText &&
      <span className="font-nunito font-bold text-base leading-6">
        {children}
      </span>}
    </button>
  );
}
