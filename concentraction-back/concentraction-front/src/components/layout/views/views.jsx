/** Day View component which displays all tasks for the current day */

import { useState } from "react";
import ListCard from "../../dnd/listCard";
import Card from "../../dnd/card";
import { DAY_TASKS } from "../../../data/tasks";

//custom hooks
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

//media query
import { useMediaQuery } from "../../../utils/hooks/mediaQueryHook";
import ListSlider from "../../../services/slickCarousel";

function DayView() {
  const tasks = DAY_TASKS;

  //returns an object with properties named after a container, each property contains an array of tasks
  const initialBoardSections = useInitializeLists(tasks);

  const [listSections, setListSections] = useState(initialBoardSections);

  //identifies which task is being dragged
  const [activeTaskId, setActiveTaskId] = useState(null);

  //defines what triggers the drag
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor),
    useSensor(PointerSensor)
  );

  //when handle starts, changes the activeTaskId
  const handleDragStart = ({ active }) => {
    setActiveTaskId(active.id);
  };

  //destructure arguments
  const handleDragOver = ({ active, over }) => {
    //active is the task being dragged
    //find title/id of activeContainer (to drag from)
    const activeContainer = useFindListSectionContainer(
      listSections,
      active.id
    );
    //find title/id of overContainer(to drag to)
    const overContainer = useFindListSectionContainer(listSections, over?.id);

    //if those do not exist or if the activecontainer is the same as the overcontainer (no drag) > return early
    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    //checks that the over container is not the same as the active container
    if (activeContainer && overContainer && activeContainer !== overContainer) {
      //pass a function to setListSections with the existing list as argument to update it
      setListSections((listSection) => {
        //select array of tasks within listSections which property's name matches the name of active/over container (ex : to do)
        const activeItems = listSection[activeContainer];
        const overItems = listSection[overContainer];

        //within array of tasks of the active container, find the index of the item which id matches the active id (so task being dragged)
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

  //active is the task being dragged from and over is the list being dropped to
  const handleDragEnd = ({ active, over }) => {
    //returns active container
    const activeContainer = useFindListSectionContainer(
      listSections,
      active.id
    );
    //returns over container

    console.log("end", activeContainer);
    const overContainer = useFindListSectionContainer(listSections, over?.id);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      return;
    }

    //boucle sur chaque tâche associée au container de début et trouve l'index de la tâche dont l'id correspond à l'id de la tâche active (recherche de la tâche active)
    const activeIndex = listSections[activeContainer].findIndex(
      (task) => task.id === active.id
    );

    //boucle sur chaque tâche associée au container de fin et trouve l'index de la tâche dont l'id correspond à l'id de la tâche active
    const overIndex = listSections[overContainer].findIndex(
      (task) => task.id === over?.id
    );

    /* If the task is not already in the over container
    arrayMoveImmutable(array, fromIndex, toIndex)
      Clones the given array, moves the item to a new position in the new array, and then returns the new array. The given array is not mutated.*/
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

  //permet de créer les différentes listSections
  var toDoLists = Object.keys(listSections);

  if (useMediaQuery("md")) {
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
  } else {
    return (
      <section className="carousel-container h-full my-10">
        <ListSlider>
          {toDoLists.map((listSectionKey, index) => {
            return (
              <ListCard
                index={index}
                key={listSectionKey}
                taskList={listSections[listSectionKey]}
                listTitle={listSectionKey}
              ></ListCard>
            );
          })}
        </ListSlider>
      </section>
    );
  }
}

//dragOverlay emulates the active task being dragged from one list to another

function MonthView() {
  return <div>I am the monthView.</div>;
}

function WeekView() {
  return <div>I am the WeekView</div>;
}

export { DayView, WeekView, MonthView };
