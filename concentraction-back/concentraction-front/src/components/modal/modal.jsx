/** Modal that shows up to add or update a task
 * Uses modalContext to receive modal value : open(true) or closed (false)
 * modal backdrop is used to single out modal content
 * modal content : add or update a task
 */
import { useContext } from "react";
import { ModalContext } from "./modalContext";
import { Heading2 } from "../typography";
import { AddATask } from "./addATask";

import IconifyIcon from "../icon";

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
          className={`modal-content flex flex-col justify-between items-center translate-y-0 w-1/2 h-full bg-brand-yellow border-8 border-solid border-neutral-white rounded-md ${
            modal
              ? "translate-x-0"
              : "-translate-x-full transition-all duration-900 ease-in-out"
          }`}
        >
          <ModalHeader modalTitle="Add a task" />
          <AddATask />
        </div>
      </section>
    </>
  );
}

function ModalHeader({modalTitle}) {
  const { closeModal } = useContext(ModalContext);

  return (
    <div className="modal-header flex justify-between w-full p-6 rounded-md" aria-labelledby="Add a task">
      <button><IconifyIcon iconName="lets-icons:return-light" iconClassName="text-brand-blue" width={40} height={40}/></button>
      <Heading2 text={modalTitle} heading2ClassName="text-neutral-white text-shadow-modalHeader"></Heading2>
      <button onClick={closeModal}><IconifyIcon iconName="system-uicons:cross" iconClassName="text-brand-blue bg-brand-red border border-solid border-brand-blue rounded-full" width={30} height={30}/></button>
    </div>
  );
}
