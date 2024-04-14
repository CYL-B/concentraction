// https://clouddevs.com/react/usedraggable-hook/

import { useState, useEffect } from "react";

const useDraggable = (id) => {
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const handleDragStart = (event) => {
        // Set the data to be transferred during the drag operation
        console.log("drag start",event)
      event.dataTransfer.setData("text/plain", id);
      setDragging(true);
    };
    const handleDragEnd = () => {
      setDragging(false);
    };
    //Event handler for when dragging starts
    const dragSource = document.querySelector(`#${id}`);
    dragSource.addEventListener("dragstart", handleDragStart);
    dragSource.addEventListener("dragend", handleDragEnd);
    return () => {
      dragSource.removeEventListener("dragstart", handleDragStart);
      dragSource.removeEventListener("dragend", handleDragEnd);
    };
  }, [id]);
  return { dragging};
};
export default useDraggable;
