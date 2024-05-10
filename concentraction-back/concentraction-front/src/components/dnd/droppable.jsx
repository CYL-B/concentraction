/** Wrapper from dnd that makes the children wrapped inside it droppable such as a list**/
import { useDroppable } from "@dnd-kit/core";

export default function Droppable({ children, elementId }) {
  //useDroppable is a custom hook that takes an argument id (takes listTitle props here) and returns setNodeRef
  const { setNodeRef } = useDroppable({
    id: elementId,
  });

  return <div ref={setNodeRef}>{children}</div>;
}
