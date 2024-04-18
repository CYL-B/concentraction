//DnD kit
import { useDroppable } from "@dnd-kit/core";

export default function Droppable({ children, elementId }) {
  const { setNodeRef } = useDroppable({
    id: elementId,
  });

  return <div ref={setNodeRef}>{children}</div>;
}
