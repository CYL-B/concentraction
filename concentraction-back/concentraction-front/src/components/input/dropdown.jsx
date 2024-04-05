import IconifyIcon from "../icon";
export function Dropdown({
  register,
  options,
  name,
  variant = "text-light",
  ...rest
}) {
  // const [option, setOption] = useState("");

  // const handleDropdown = (event) => {
  //   setOption(event.target.value)
  // }

  return (
    <div className={`dropdown relative  ${variant.toLowerCase()}`}>
      <select
        {...register(name)}
        {...rest}
        className={`pb-4 appearance-none bg-transparent w-full font-bold`}
      >
        <option value="" disabled selected>Dropdown</option>
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <IconifyIcon iconName="raphael:arrowdown" width={20} height={20} iconClassName="absolute right-4"/>
    </div>
  );
}
