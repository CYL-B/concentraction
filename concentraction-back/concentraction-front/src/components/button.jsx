import IconifyIcon from "./icon";

//Defining object variantMaps with properties meant to define each button style
const variantMaps = {
  primary:
    "bg-brand-red text-neutral-white border-brand-red hover:bg-neutral-white hover:text-brand-red",
  secondary:
    "bg-neutral-white text-brand-blue border-brand-blue hover:bg-brand-blue hover:text-neutral-white",
};

//onClick function activated when button clicked,
//variant of button,
//label is the text within the button,
//type is the html tag to use,
//layoutClasses is the style shared by all buttons
//isIcon is a boolean property that determines if the button wraps an Icon (eg: navbar)
export function Button({
  onClick,
  role = "button",
  variant = "primary",
  type = "btnAnchor",
  children,
  isIcon = false,
  ...restProps
}) {
  const buttonLayoutClasses = `btn font-anton rounded-md text-base leading-6 text-center border-[3px] border-solid align-middle flex ${
    isIcon ? "p-0" : "px-11 py-5"
  } w-auto h-auto focus:outline focus:outline-solid focus:ring-brand-yellow`;

  const finalButtonClasses = `${buttonLayoutClasses} ${type} ${
    variantMaps[variant.toLowerCase()]
  }`;

  if (type == "btnAnchor") {
    return (
      <a
        href="#"
        type={role}
        onClick={onClick}
        className={finalButtonClasses}
        {...restProps}
      >
        {children}
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
        {children}
      </button>
    );
  }
}

export function AddButton({
  onClick,
  children,
  addText = true,
  role = "button",
}) {
  return (
    <button
      className="flex items-center justify-center gap-3 hover:last:underline"
      onClick={onClick}
      type={role}
    >
      <IconifyIcon
        iconClassName="first:text-neutral-white first:hover:text-brand-blue border border-solid border-brand-blue rounded-full w-10 h-10 bg-brand-blue hover:bg-neutral-white"
        iconName="material-symbols-light:add-rounded"
      />
      {addText && (
        <span className="font-nunito font-bold text-base leading-6">
          {children}
        </span>
      )}
    </button>
  );
}
