/*Custom dropdown component : does not use select and option elements
Dropdown : dropdown with select and options */ 
import IconifyIcon from "../icon";
import { Body } from "../typography";
import { useState } from "react";

export function Dropdown({
  register,
  options,
  name,
  variant = "text-light",
  ...rest
}) {
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
  onChange,
  value
}) {
  //if toggleOpen, dropdown opens, if not, dropdown closes.
  //selected : object with isSelected and selectedValue properties
  const [toggleOpen, setToggleOpen] = useState(false);
  const [selected, setSelected] = useState({
    isSelected: false,
    selectedValue: value
  });

  //fires when clicked on button, toggles dropdown.
  const dropdownOpen = (e) => {
    e.preventDefault();
    setToggleOpen(!toggleOpen);
  };

  //fires when an option is clicked
  //setSelected : changes object selected and its value
  //onChange: uses reverse data flow => sends info on the option selected to the parent
  const handleSelect = (e, option) => {
    setSelected({ isSelected: true, selectedValue: option.name });
    onChange(option.name)
    setToggleOpen(false);
  };

  return (
    <div
      className="dropdown-wrapper relative min-w-40"
    >
      <a
        href="#"
        aria-haspopup="dropdown-list"
        aria-expanded={toggleOpen}
        aria-label={selected.isSelected ? selected.selectedValue : headerTitle}
        onClick={dropdownOpen}
        className={`dropdown-header flex justify-between items-center border-b border-solid pb-4 ${
          selected.isSelected
            ? "border-neutral-white"
            : toggleOpen
            ? "border-neutral-white"
            : "border-light-grey"
        }`}
      >
        <Body classHeading="font-bold">
          {selected.isSelected ?  selected.selectedValue : headerTitle}
        </Body>
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
                aria-selected={option.name ==  selected.selectedValue}
                className={`list-item${index} text-brand-blue font-nunito p-3 w-full`}
                name={option.name}
                key={option.name}
              >
                <a
                  href="#"
                  onClick={(e) => handleSelect(e, option)}
                  className="block w-full"
                >
                  <span>{option.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
