/** Modal that shows up to add or update a task
 * Uses modalContext to receive modal value : open(true) or closed (false)
 * modal backdrop is used to single out modal content
 * modal content : add or update a task
 */
import { useContext } from "react";
import { ModalContext } from "./modalContext";
import { Heading2 } from "../typography";
import { AddATask } from "./addATask";

export function Modal() {
  //consumer component that takes modal element
  const { modal } = useContext(ModalContext);

  return (
    <>
      <section
        aria-modal="true"
        aria-hidden={!modal}
        tabIndex={-1}
        className={`modal-backdrop h-full w-full fixed top-0 left-0 ${
          modal
            ? "overflow-auto z-50 block bg-neutral-black bg-opacity-60"
            : " pointer-events-none overflow-hidden  bg-opacity-0 transition-[background] duration-300 ease-in-out"
        }`}
      >
        <div
          role="dialog"
          aria-labelledby="Add a task"
          className={`modal-content translate-y-0 w-1/2 h-full ${
            modal
              ? "translate-x-0"
              : "-translate-x-full transition-all duration-900 ease-in-out"
          }`}
        >
          <ModalHeader />
          <AddATask />
        </div>
      </section>
    </>
  );
}

function ModalHeader() {
  return (
    <div className="modal-header" aria-labelledby="Add a task">
      <Heading2></Heading2>
    </div>
  );
}
