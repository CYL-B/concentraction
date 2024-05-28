/** Whole calendar wrapping every day of each month with tasks due on that day
 * Include logic to generate as many Day components as there are days in the month
 * Include logic to generate as many MiniCard components as there are tasks due on each day **/

import { MiniCard } from "./cardMini";
import { Day } from "./day";

//Apollo client import
import { useQuery } from "@apollo/client";
import { GET_USER_TASKS } from "../../services/queries";

export default function CalendarWrapper({day, name, }) {

  const {data, loading, error }= useQuery(GET_USER_TASKS, {
    onCompleted: (data) => {
      //add confirmation message
      console.log("hey",data);
    },
    // update(cache, { data }) {
    //   //current state of tasks
    //   const { tasks } = cache.readQuery({
    //     query: GET_USER_TASKS,
    //   });
    //   //change the data within the cache for get user tasks, copying current tasks and adding the new one
    //   cache.writeQuery({
    //     query: GET_USER_TASKS,
    //     data: {
    //       user: {
    //         tasks: [data.addTask, ...tasks],
    //       },
    //     },
    //   });
    // },
  });
  
  function getDaysInMonth(year, month) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
  
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day).toDateString();
      // const dayOfMonth = date.getDate();
    }
  }

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  getDaysInMonth(currentYear, currentMonth);
  

  return (
    <div className="calendarWrapper flex flex-wrap">
      <Day day="1">
        <MiniCard>Name of Task</MiniCard>
      </Day>
      <Day day="1"></Day>
      <Day day="1"></Day>
      <Day day="1"></Day>
      <Day day="1"></Day>
      <Day day="1"></Day>
      <Day day="1"></Day>
      <Day day="1"></Day>
    </div>
  );
}
