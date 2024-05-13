import { useState, useEffect, useRef } from "react";
export function useOpenModal() {
  const [modal, setModal] = useState(true);
  const ref = useRef(null);
  const handleOpenModal = () => {
    setModal(!modal);
  };
  const closeModal = () => {
    setModal(false);
  };

  const handleClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      //only fires if the user clicks outside the modal
      closeModal();
    }
  };

  useEffect(() => {
    //assign (and remove) an event listener
    if (modal) {
      document.addEventListener("click", handleClick);
    }
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [modal]);

  useEffect(()=> {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
  
    document.addEventListener('keydown', handleKeyDown);
  
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };

  }, [modal])

  return { ref, handleOpenModal, modal, closeModal };
}
