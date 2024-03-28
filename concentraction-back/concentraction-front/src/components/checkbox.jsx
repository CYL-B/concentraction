import { useState } from "react";
import { Body } from "./typography";

export default function Checkbox({
  checkboxId,
  checkboxName,
  placeholder,
  checkboxTitle,
  checked,
  ...checkboxProps
}) {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);
  return (
    <div className="checkbox-wrapper">
      <Body classHeading="block font-bold">{checkboxTitle}</Body>
      <label for={checkboxName} className="group flex items-center ">
        <input
          className={`appearance-none w-5 h-5 border border-solid border-dark-grey rounded relative transition-all duration-300 ease-in-out ${
            isChecked
              ? "bg-brand-blue border-neutral-black before:absolute before:inline-block before:rotate-45 before:h-[10px] before:w-[7px] before:border-b before:border-r before:border-neutral-white before:rounded-[1px] before:left-[30%] before:bottom-[30%]"
              : "group-hover:mt-[-1px] group-hover:ml-[-1px] group-hover:shadow-brand-blue group-hover:shadow-[1px_1px_0px_1px] group-hover:border-brand-blue"
          }`}
          {...checkboxProps}
          type="checkbox"
          id={checkboxId}
          name={checkboxName}
          placeholder={placeholder}
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        ></input>
        <span
          className={`font-nunito text-sm leading-[21px] capitalize pl-2 align-top ${
            isChecked ? "line-through" : ""
          }`}
        >
          {checkboxName}
        </span>
      </label>
    </div>
  );
}

export function ToDoList() {

    const [todos, setTodos] = useState([
        { task: "Pick up groceries", done: false },
        { task: "Buy Milk", done: true },
        { task: "Complete Project X", done: false },
      ]);

      const handleChange = (done, i) => {
        let tmp = todos[i];
        tmp.done = !done;
        let todosClone = [...todos];
        todosClone[i] = tmp;
        setTodos([...todosClone]);
      };

      return (
        <div className="app">
        {todos.map(({ task, done }, i) => (
            <div key={i}>
              <label htmlFor={i}>
                <input
                  type="checkbox"
                  onChange={() => handleChange(done, i)}
                  checked={done}
                  id={i}
                />
                <span>{task}</span>
              </label>
            </div>
          ))}
        </div>
      )
}