import { useState, useEffect } from "react";

const useDroppable = (id) => {
  const [over, setOver] = useState(false);

  useEffect(() => {
    const handleDragOver = (event) => {
      event.preventDefault();
      setOver(true);
    };
    const handleDragLeave = () => {
      setOver(false);
    };

    const handleDrop = (event) => {
      event.preventDefault();
      // Retrieve the data that was set during the drag operation
      console.log(event.dataTransfer)
      const draggedId = event.dataTransfer.getData("text/plain");
      console.log(draggedId)

      const source = document.getElementById(draggedId);
      const dropTarget = document.querySelector(`#${id}`);
      // Append the draggable element to the droppable area
      dropTarget.appendChild(source);
      // handle the drop action here
      setOver(false);
    };
    const dropTarget = document.querySelector(`#${id}`);
    dropTarget.addEventListener("dragover", handleDragOver);
    dropTarget.addEventListener("dragleave", handleDragLeave);
    // Event handler for when dropping occurs
    dropTarget.addEventListener("drop", handleDrop);
    return () => {
      dropTarget.removeEventListener("dragover", handleDragOver);
      dropTarget.removeEventListener("dragleave", handleDragLeave);
      dropTarget.removeEventListener("drop", handleDrop);
    };
  }, [id]);

  return { over };
};

export default useDroppable;
