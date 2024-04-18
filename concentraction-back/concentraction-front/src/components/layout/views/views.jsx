import { useState } from "react";
import ListCard from "../../dnd/listCard";
import Card from "../../dnd/card";
import { DAY_TASKS } from "../../../data/tasks";

//helpers
import {
  useFindListSectionContainer,
  useInitializeLists,
} from "../../../utils/hooks/initializeLists";

//dnd kit
import {
  DndContext,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
  PointerSensor,
  closestCorners,
  DragOverlay,
  defaultDropAnimation,
} from "@dnd-kit/core";

import { arrayMove } from "@dnd-kit/sortable";
import { getTaskById } from "../../../utils/hooks/getTasks";

function DayView() {
  const tasks = DAY_TASKS;
  //returns an object with properties each named after a container, each property is an array of tasks
  const initialBoardSections = useInitializeLists(tasks);

  const [listSections, setListSections] = useState(initialBoardSections);

  const [activeTaskId, setActiveTaskId] = useState(null);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor),
    useSensor(PointerSensor)
  );

  const handleDragStart = ({ active }) => {
    setActiveTaskId(active.id);
  };

  //destructure arguments
  const handleDragOver = ({ active, over }) => {
    //find title/id of activeContainer (to drag from)
    const activeContainer = useFindListSectionContainer(
      listSections,
      active.id
    );
    //find title/id of overContainer(to drag to)
    const overContainer = useFindListSectionContainer(listSections, over?.id);
    //if those do not exister or if the activecontainer is the same as the overcontainer (no drag) > return early
    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    if (activeContainer && overContainer && activeContainer !== overContainer) {
      //pass a function to setListSections with the existing list as argument to update it
      setListSections((listSection) => {
        //select object within listSections which property's name matches the name of active/over container (ex : to do)
        const activeItems = listSection[activeContainer];
        const overItems = listSection[overContainer];
        //find the index of the item which id matches the active id
        const activeIndex = activeItems.findIndex(
          (item) => item.id === active.id
        );

        //find the index of the item in the overItems which id does not match the over id
        const overIndex = overItems.findIndex((item) => item.id !== over?.id);

        //copies listSections, updates activeContainer object by removing the item which id matches the active item

        return {
          ...listSection,
          [activeContainer]: [
            ...listSection[activeContainer].filter(
              (item) => item.id !== active.id
            ),
          ],
          //update overContainer by slicing and copying the overcontainer object up to (but not including) overIndex, adding the element from the activecontainer that is dragged over, and slicing and copying the overContainer object from the overIndex jusqu'à la fin du tableau
          [overContainer]: [
            ...listSection[overContainer].slice(0, overIndex),
            listSection[activeContainer][activeIndex],
            ...listSection[overContainer].slice(
              overIndex,
              listSection[overContainer].length
            ),
          ],
        };
      });
    }
  };

  const handleDragEnd = ({ active, over }) => {
    const activeContainer = useFindListSectionContainer(
      listSections,
      active.id
    );

    console.log("end", activeContainer);
    const overContainer = useFindListSectionContainer(listSections, over?.id);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      return;
    }

    const activeIndex = listSections[activeContainer].findIndex(
      (task) => task.id === active.id
    );
    const overIndex = listSections[overContainer].findIndex(
      (task) => task.id === over?.id
    );

    if (activeIndex !== overIndex) {
      setListSections((listSections) => ({
        ...listSections,
        [overContainer]: arrayMove(
          listSections[overContainer],
          activeIndex,
          overIndex
        ),
      }));
    }

    setActiveTaskId(null);
  };

  const dropAnimation = {
    ...defaultDropAnimation,
  };

  const task = activeTaskId ? getTaskById(tasks, activeTaskId) : null;

  var toDoLists = Object.keys(listSections);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDragStart={handleDragStart}
    >
      <section className="flex justify-between items-center h-full">
        {toDoLists.map((listSectionKey) => {
          return (
            <ListCard
              key={listSectionKey}
              taskList={listSections[listSectionKey]}
              listTitle={listSectionKey}
            ></ListCard>
          );
        })}
        <DragOverlay dropAnimation={dropAnimation}>
          {task ? <Card cardDate={task.date} cardTitle={task.title} /> : ""}
        </DragOverlay>
      </section>
    </DndContext>
  );
}

//dragOverlay emulates the active task being dragged from one list to another

function MonthView() {
  return <div>I am the monthView.</div>;
}

function WeekView() {
  return <div>I am the WeekView</div>;
}

export { DayView, WeekView, MonthView };
