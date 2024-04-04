export function Dropdown({ children, ...restDropProps }) {
  // const [option, setOption] = useState("");

  // const handleDropdown = (event) => {
  //   setOption(event.target.value)
  // }

  return <select {...restDropProps}>{children}</select>;
}

export function Option({ value, name }) {
  return <option value={value}>{name}</option>;
}
