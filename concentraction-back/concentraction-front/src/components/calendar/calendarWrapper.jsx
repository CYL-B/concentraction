/** Whole calendar wrapping every day of each month with tasks due on that day
 * Include logic to generate as many Day components as there are days in the month
 * Include logic to generate as many MiniCard components as there are tasks due on each day **/

import { MiniCard } from "./cardMini";
import { Day } from "./day";

export default function CalendarWrapper({}) {
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
