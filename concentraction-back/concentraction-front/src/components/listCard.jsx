import { useState } from "react";

import { Heading4 } from "./typography";
import IconifyIcon from "./icon";
import { AddButton } from "./button";
import Card from "./card";

export default function ListCard({
  listTitle,
  handleDelete = () => {},
  handleOnDrop = () => {},
  taskList = [],
}) {
  // const [taskList, setTaskList] = useState([
  //   {
  //     cardTitle: "",
  //     cardDate: "",
  //     cardTag: "",
  //     cardCategory: "",
  //   },
  // ]);

  // const cardList = taskList
  //   .filter((task) => task.cardCategory == listTitle)
  //   .map((task) => {
  //     return (
  //       <Card
  //         cardTitle={task.cardTitle}
  //         cardDate={task.cardDate}
  //         cardTag={task.cardTag}
  //       />
  //     );
  //   });

  // const handleDelete = (listTitle) => {
  //   console.log("delete");
  // };

  const handleOnDragOver = (e) => {
    e.preventDefault();
    console.log("onDragOver");
  };

  // const handleOnDrop = (e, category) => {
  //   console.log("e, category", e, category);

  //   if (taskList) {
  //     setTaskList([...taskList, e.dataTransfer.getData("text")]);
  //   } else {
  //     setTaskList([e.dataTransfer.getData("text")]);
  //   }

  // let tasks = taskList.filter((task) => {
  //   if (task.cardTitle == id) {
  //     task.category == category
  //   }
  //   return task;
  // })

  // setTaskList(
  //   ...taskList,
  //   {tasks}
  // )
  // };

  const handleOnDrag = (e, task) => {
    //dataTransfer can online store strings so if it receives an object (task) as an argument, said argument must be converted to a string.

    let draggedTask = JSON.stringify(task);

    e.dataTransfer.setData("task", draggedTask);
  };

  return (
    <div
      id={listTitle}
      className="container-drag min-w-[296px] flex flex-col justify-between border container-drag border-solid border-neutral-black bg-neutral-white"
    >
      <div className="list-header flex justify-between items-center border-b border-solid border-neutral-black px-3">
        <Heading4>{listTitle}</Heading4>
        <button onClick={handleDelete}>
          <IconifyIcon height={20} width={20} iconName="ph:trash-thin" />
        </button>
      </div>
      <div
        className="list-body droppable gap-y-2 p-2 flex flex-col h-full"
        onDragOver={handleOnDragOver}
        onDrop={handleOnDrop}
      >
        {taskList &&
          taskList.map((task) => {
            return (
              <Card
                cardTitle={task.cardTitle}
                cardDate={task.cardDate}
                cardTag={task.cardTag}
                handleOnDrag={(e) => handleOnDrag(e, task)}
              />
            );
          })}
        {/* {taskList &&
          taskList.map((task) => {
            return (
              <Card
                cardTitle={task.cardTitle}
                cardDate={task.cardDate}
                cardTag={task.cardTag}
              />
            );
          })} */}
      </div>
      <div className="list-footer border-t border-solid border-color-light-grey py-1">
        <AddButton addButtonClass="m-auto" addText={true}>
          Ajouter
        </AddButton>
      </div>
    </div>
  );
}
