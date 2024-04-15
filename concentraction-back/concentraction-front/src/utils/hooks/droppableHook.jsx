import { useState, useEffect } from "react";

const useDroppable = (id) => {
  const [over, setOver] = useState(false);
  const [cardList, setCardList] = useState([]);

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
      const dragged = event.dataTransfer.getData("text/plain");
      setCardList(...cardList, dragged);
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

  return { over, cardList };
};

export default useDroppable;
