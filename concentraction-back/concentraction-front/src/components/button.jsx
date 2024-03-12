const variantMaps = {
  primary : "bg-brand-red text-neutral-white border-brand-red hover:bg-neutral-white hover:text-brand-red focus:ring-brand-yellow",
  secondary:"bg-neutral-white text-brand-blue border-brand-blue hover:bg-brand-blue hover:text-neutral-white focus:ring-brand-yellow"
}

export function Button({onClick, variant="primary", label="Test",...restProps}) {
  const buttonLayoutClasses =
  'btn font-anton rounded-md text-base leading-6 text-center border-[3px] border-solid align-middle mx-11 my-5 focus:outline outline-solid';

 

const finalButtonClasses = `${buttonLayoutClasses} ${variantMaps[variant.toLowerCase()]}`;

  return (
    <a role="button" onClick={onClick} className={finalButtonClasses} {...restProps}>{label}</a>
  )
}


export function AddButton({onClick}) {
    return(
        <button  type="button" onClick={onClick}></button>
    )
}