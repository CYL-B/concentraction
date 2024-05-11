import { useState } from "react";
export default function useOpenModal() {
  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal(!modal)
  }

  return modal, handleOpenModal;
}
