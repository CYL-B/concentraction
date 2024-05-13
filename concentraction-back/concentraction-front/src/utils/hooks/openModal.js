import { useState, useEffect, useRef } from "react";
export function useOpenModal() {
  const [modal, setModal] = useState(true);
  const handleOpenModal = () => {
    setModal(!modal);
  };

  const closeModal = () => {
    setModal(false);
  };

  return { modal, handleOpenModal, closeModal };
}

export function useClickOutside(callback, modal) {
  const ref = useRef();

  useEffect(() => {
    if (modal) {
      const handleClick = (event) => {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          !event.target.closest("form")
        ) {
          //only fires if the user clicks outside the modal
          callback();
        }
      };

      //assign (and remove) an event listener
      document.addEventListener("click", handleClick, true);

      return () => {
        document.removeEventListener("click", handleClick, true);
      };
    }
  }, [ref]);

  return ref;
}
