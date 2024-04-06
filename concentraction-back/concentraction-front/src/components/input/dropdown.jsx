import { useActionData } from "react-router-dom";
import IconifyIcon from "../icon";
import { Body } from "../typography";
import { useState } from "react";
//https://ibrahimaq.com/blogs/how-to-create-a-custom-accessible-dropdown-with-react-and-typescript
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
        defaultValue="Dropdown"
      >
        <option className="bg-transparent" value="Dropdown" disabled>
          Dropdown
        </option>
        {options.map((value) => (
          <option
            className="appearance-none bg-transparent"
            key={value}
            value={value}
          >
            {value}
          </option>
        ))}
      </select>
      <IconifyIcon
        iconName="raphael:arrowdown"
        width={20}
        height={20}
        iconClassName="absolute right-4"
      />
    </div>
  );
}

export function CustomDropdown({ headerTitle, title, options, onValueUpdate }) {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [selected, setSelected] = useState({
    isSelected: null,
    selectedName: null,
    value:null
  });

  const [error, setError] = useState(null);

  const dropdownOpen = (e) => {
    e.preventDefault();
    setToggleOpen(!toggleOpen);
  };

  const handleSelect = (option, e) => {
    e.preventDefault();
    const { name,value } = option;
    setSelected({
      isSelected: true,
      selectedName: name,
      value:value
    });
    setToggleOpen(false);
  };

  useEffect(() => {
    if (onValueUpdate !== undefined && selected.isSelected) {
      onValueUpdate(selected.value);
    }
  }, [selected]);
  return (
    <div className="dropdown-wrapper relative">
      <a
        href="#"
        aria-haspopup="dropdown-list"
        aria-expanded={toggleOpen}
        aria-label={selected.isSelected ? selected.selectedName : headerTitle}
        title={title}
        onClick={dropdownOpen}
        className="dropdown-header flex justify-between items-center"
      >
        <Body>{selected.isSelected ? selected.selectedName : headerTitle}</Body>
        <IconifyIcon
          iconName="raphael:arrowdown"
          width={20}
          height={20}
          iconClassName={`transition-all ease-in-out duration-300 ${
            toggleOpen ? "rotate-180" : ""
          }`}
        />
      </a>
      {toggleOpen ? (
        <ul
          className={` dropdown-list absolute top-full flex flex-col items-start justify-center`}
        >
          {options.map((option, index) => {
            <li
              className={`list-item${index}`}
              name={option.name}
              key={option.name}
              {...onValueUpdate}//function to be passed
            >
              <a href="#" onClick={handleSelect(option, e)}>
                <span>{option.name}</span>
              </a>
            </li>;
          })}
        </ul>
      ) : null}
    </div>
  );
}
