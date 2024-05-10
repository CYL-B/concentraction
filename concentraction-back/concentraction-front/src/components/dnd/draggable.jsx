/** Wrapper from dnd that makes the children wrapped inside it draggable such as a card **/
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Draggable({
  element,
  children,
  id
}) {
  const Element = element || "div";

  //useSortable is a custom hook that takes an argument id (takes card id props here) and returns the attributes, listeners, setNodeRef, transform, transition and isDragging
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
  });

  //Style makes the task disappear from its initial position when dragging
  return (
    <div
      style={{
        transform: CSS.Translate.toString(transform),
        transition,
        opacity: isDragging ? 0 : 1,
      }}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
    >
      {children}
    </div>
  );
}
