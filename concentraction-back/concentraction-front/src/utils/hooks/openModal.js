/** Hook to handle modal 
 * handleOpenModal : toggles modal
 * closeModal : only closes it
 * useEffect : used to add an event listener on the whole window to detect click/escape outside modal to close it 
 * ref.current : element referenced by useRef in the DOM
 * event.target : element clicked
*/
import { useState, useEffect, useRef } from "react";
export function useOpenModal() {
  const [modal, setModal] = useState(false);

  const ref = useRef();
  const handleOpenModal = () => {
    setModal(!modal);
  };

  const closeModal = () => {
    setModal(false);
    console.log(modal);
  };

  useEffect(() => {
    if (modal) {
      const handleClick = (event) => {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          !event.target.closest("form")
        ) {
          //only fires if the user clicks outside the modal
          setModal(false);
        }
      };

      //assign (and remove) an event listener
      document.addEventListener("click", handleClick, true);

      return () => {
        document.removeEventListener("click", handleClick, true);
      };
    }
  }, [modal]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [modal]);

  return { modal, handleOpenModal, closeModal, ref };
}
