/** Whole calendar wrapping every day of each month with tasks due on that day
 * Include logic to generate as many Day components as there are days in the month
 * Include logic to generate as many MiniCard components as there are tasks due on each day **/
import { useState, useEffect } from "react";
import { Day } from "./day";

//Apollo client import
import { useQuery } from "@apollo/client";
import { GET_USER_TASKS } from "../../services/queries";

function getDaysInMonth(year, month) {
  var daysInMonth = new Date(year, month + 1, 0).getDate();

  const totalDays = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day).toLocaleDateString("fr");
    totalDays.push(date);
  }

  return totalDays;
}

function filteredTasks (taskArray, dateOfTheDay) {

  var filteredTasks = [];
  for (var i = 0; i < taskArray.length; i++) {
    var convertedDate = Number(taskArray[i].startDate);
    var readableDate = new Date(convertedDate);
    var checkDate = readableDate.toLocaleDateString("fr");

    if (dateOfTheDay === checkDate) {
      filteredTasks.push(taskArray[i]);
    }
  };
return filteredTasks;
}

export default function CalendarWrapper({ year, month, tasks }) {
  const [tasksMap, setTasksMap] = useState([]);

  const { data, loading, error } = useQuery(GET_USER_TASKS, {
    
    onCompleted: (data) => {
      console.log("hey")
      //add confirmation message
      var dataFrom = data.getTasks.user.tasks;
      setTasksMap(dataFrom);
    },
    update(cache, { data }) {
      //current state of tasks
      const { tasks } = cache.readQuery({
        query: GET_USER_TASKS,
      });
      //change the data within the cache for get user tasks, copying current tasks and adding the new one
      cache.writeQuery({
        query: GET_USER_TASKS,
        data: {
          user: {
            tasks: [data.addTask, ...tasks],
          },
        },
      });
    },
  });

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  //permet de créer un tableau à partir des valeurs
  const numberOfDays = [
    ...Array.from(getDaysInMonth(currentYear, currentMonth)),
  ];

  // for (var i = 0; i < numberOfDays.length; i++) {
  //   for (var j = 0; j < tasksMap.length; j++) {
  //     var convertedDate = Number(tasksMap[j].startDate);
  //     var readableDate = new Date(convertedDate);
  //     var checkDate = readableDate.toLocaleDateString("fr");

  //     if (numberOfDays[i] === checkDate) {
  //     }
  //   }
  // }



  return (
    <div className="calendarWrapper grid grid-cols-3 basis-3/4 gap-2">
      {numberOfDays.map((date, index) =>
         
         

        <Day day={index + 1} tasks={filteredTasks(tasksMap, date)} />
      )}
      {console.log(tasksMap)}
    </div>
    
  );
}
