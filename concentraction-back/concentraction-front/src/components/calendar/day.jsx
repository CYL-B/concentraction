export function Day({ day, children }) {
  return (
    <div className="taskContainer flex items-center min-h-fit">
      <span className="border-r-2 border-solid border-neutral-black pr-3">{day}</span>
      <div className="taskWrapper flex flex-wrap  pt-3 pb-1 mx-3 border-b  border-dotted border-neutral-black ">{children}</div>
    </div>
  );
}
