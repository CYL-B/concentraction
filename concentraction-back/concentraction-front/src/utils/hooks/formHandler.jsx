//unused 11/05/24
//https://medium.com/@ojebiyifulness/how-to-create-a-custom-hook-to-handle-inputs-in-react-cf2ab177f70d

import { useState } from "react";

export default function useFormHandler  (e,optionSelected)  {
  //if toggleOpen, dropdown opens, if not, dropdown closes.
  //is the selected option : its name, its status
  const [toggleOpen, setToggleOpen] = useState(false);
  const [selected, setSelected] = useState({
    isSelected: null,
    selectedName: null,
  });
//validate the value passed and error check
//   const valueIsValid = validateValue(selected);
//   const hasError = !valueIsValid && isTouched;

  //fires when clicked on button, toggles dropdown.
  const dropdownOpen = () => {
    e.preventDefault();
    setToggleOpen(!toggleOpen);
  };

  //fires when an option is clicked
  const handleSelect = (e, optionSelected) => {
    e.preventDefault();
    const { name } = optionSelected;
    setSelected({
      isSelected: true,
      selectedName: name,
    });
    setToggleOpen(false);
  };

  //fires when option is not selected anymore
  const dropdownReset = () => {
    setSelected({ isSelected: null, selectedName: null });
    setToggleOpen(false);
  };

  return 
  {
    valueSelected: selected,
    // valueIsValid,
    // hasError,
    handleSelect,
    dropdownReset,
    dropdownOpen
  };
};
