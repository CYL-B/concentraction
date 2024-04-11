import IconifyIcon from "../icon";
import { Body } from "../typography";
import { useState, useEffect } from "react";
import useFormHandler from "../../utils/hooks/formHandler";
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

export function CustomDropdown({
  headerTitle,
  options = [],
}) {

  
  //if toggleOpen, dropdown opens, if not, dropdown closes.
  //is the selected option : its name, its status
  const [toggleOpen, setToggleOpen] = useState(false);
  const [selected, setSelected] = useState({
    isSelected: null,
    selectedName: null,
  });

  // const [error, setError] = useState(null);

  //fires when clicked on button, toggles dropdown.
  const dropdownOpen = (e) => {
    e.preventDefault();
    setToggleOpen(!toggleOpen);
  };

  //fires when an option is clicked
  const handleSelect = (e, option) => {
    e.preventDefault();
    const { name } = option;
    setSelected({
      isSelected: true,
      selectedName: name,
    });
    setToggleOpen(false);
  };


  return (
    <div className="dropdown-wrapper relative min-w-40">
      <a
        href="#"
        aria-haspopup="dropdown-list"
        aria-expanded={toggleOpen}
        aria-label={selected.isSelected ? selected.selectedName : headerTitle}
        onClick={dropdownOpen}
        className={`dropdown-header flex justify-between items-center border-b border-solid pb-4 ${selected.isSelected ?"border-neutral-white": toggleOpen ? "border-neutral-white": "border-light-grey"}`}
      >
        <Body classHeading="font-bold">{selected.isSelected ? selected.selectedName : headerTitle}</Body>
        <IconifyIcon
          iconName="raphael:arrowdown"
          width={20}
          height={20}
          iconClassName={`transition-all ease-in-out duration-300 ${
            toggleOpen ? "rotate-180" : ""
          }`}
        />
      </a>
      {toggleOpen && options.length > 1 ? (
        <ul
          className={` dropdown-list absolute top-full flex flex-col items-start justify-center z-50 bg-neutral-white w-full border-solid border-b  border-l border-r border-brand-blue rounded-br rounded-blshadow-brand-blue shadow-[1px_1px_0px_1px]`}
          role="listbox"
        >
          {options.map((option, index) => {
            return (
            <li
              role="option"
              aria-label={option.name}
              aria-selected={option == selected}
              className={`list-item${index} text-brand-blue font-nunito p-3 w-full`}
              name={option.name}
              key={option.name}
              
            >
              <a href="#" onClick={(e) => handleSelect(e, option)} className="block w-full">
                <span>{option.name}</span>
              </a>
            </li>)
          })}
        </ul>
      ) : null}
    </div>
  );
}
