/** each day of a given month that can include one or more tasks depending on its due date
 * day : date in the month
 * children : list of tasks in the day **/
import { MiniCard } from "./cardMini";
export function Day({ day, tasks }) {
  return (
    <div className="taskContainer flex items-center min-h-fit">
      <span className="border-r-2 border-solid border-neutral-black pr-3">
        {day}
      </span>
      <div className="taskWrapper flex flex-wrap  pt-3 pb-1 mx-3 border-b border-dotted border-neutral-black">
        {tasks?.map((task, index) => (
          <MiniCard taskName={task.name} key={index} />
        ))}
      </div>
    </div>
  );
}
