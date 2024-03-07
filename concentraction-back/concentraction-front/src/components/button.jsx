

export function Button({onClick, variant="primary", label,...restProps}) {

  return (
    <button type="button" onClick={onClick} className={`btn btn-${variant}`} {...restProps}>{label}</button>
  )
}


export function AddButton({onClick}) {
    return(
        <button  type="button" onClick={onClick}></button>
    )
}