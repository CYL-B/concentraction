import { useState } from "react";
import ListCard from "../listCard";
function DayView() {
  const [todo, setTodo] = useState([{
    cardTitle:"Recherche",
    cardDate: "03/04/2025"
  }]);
  const [ongoing, setOngoing] = useState([{
    cardTitle:"Redigier",
    cardDate: "03/05/2025"
  }]);
  const [done, setDone] = useState([{
    cardTitle:"Plan",
    cardDate: "02/06/2023"
  }]);

  const handleOnDropToDo = (e, task) => {
    var obj = JSON.parse(e.dataTransfer.getData(`task`));    console.log("object", obj)
    if (todo) {
      setTodo([...todo.filter((task) => task.cardTitle !== obj.cardTitle), obj]);
    } else {
      setTodo([obj]);
    }

    console.log("todo", todo)

    // If dropping from ongoing --> todo
    // Delete from ongoing
    ongoing?.forEach((task) => {
      if (task.cardTitle === obj.cardTitle) {
        setOngoing([...ongoing.filter((task) => task.cardTitle !== obj.cardTitle)]);
      }
    });
    console.log("todo", ongoing)
    // If dropping from completed --> todo
    // Delete from done

    done?.forEach((task) => {
      if (task.cardTitle == obj.cardTitle) {
        setDone([...done.filter((task) => task.cardTitle !== obj.cardTitle)]);
      }
    });
    console.log("todo", done)
  };

  const handleOnDropOnGoing = (e, task) => {
    var obj = JSON.parse(e.dataTransfer.getData(`task`));
   

    if (ongoing) {
        setOngoing([...ongoing.filter((task) => task.cardTitle !== obj.cardTitle), obj]);
      } else {
        setOngoing([obj]);
      }


        // If dropping from todo --> ongoing
    // Delete from todo
    todo?.forEach((task) => {
        if (task.cardTitle === obj.cardTitle) {
          setTodo([...todo.filter((task) => task.cardTitle !== obj.cardTitle)]);
        }
      });

      // If dropping from completed --> ongoing
    // Delete from done

    done?.forEach((task) => {
        if (task.cardTitle == obj.cardTitle) {
          setDone([...done.filter((task) => task.cardTitle !== obj.cardTitle)]);
        }
      })
  }

  const handleOnDropDone = (e, task) => {
    var obj = JSON.parse(e.dataTransfer.getData(`task`));    console.log("object", obj)

    if (done) {
        setDone([...done.filter((task) => task.cardTitle !== obj.cardTitle), obj]);
      } else {
        setDone([obj]);
      }

      ongoing?.forEach((task) => {
        if (task.cardTitle == obj.cardTitle) {
          setOngoing([...ongoing.filter((task) => task.cardTitle !== obj.cardTitle)]);
        }
      })

      todo?.forEach((task) => {
        if (task.cardTitle == obj.cardTitle) {
          setTodo([...todo.filter((task) => task.cardTitle !== obj.cardTitle)]);
        }
      })
  }

  return (
    <section className="flex justify-between items-center h-full">
      <ListCard
        listTitle="To do"
        taskList={todo}
        handleOnDrop={(e,task) => handleOnDropToDo(e, task)}
      ></ListCard>
      <ListCard
        handleOnDrop={(e,task)=>handleOnDropOnGoing(e,task)}
        listTitle="Ongoing"
        taskList={ongoing}
      ></ListCard>
      <ListCard
        handleOnDrop={(e,task) => handleOnDropDone(e,task)}
        listTitle="Done"
        taskList={done}
      ></ListCard>
    </section>
  );
}

function MonthView() {
  return <div>I am the monthView.</div>;
}

function WeekView() {
  return <div>I am the WeekView</div>;
}

export { DayView, WeekView, MonthView };
