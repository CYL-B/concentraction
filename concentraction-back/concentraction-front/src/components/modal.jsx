/** Modal that shows up to add or update a task
 * https://blog.openreplay.com/creating-easy-custom-modals-with-react/
 * https://dev.to/alexandprivate/your-next-react-modal-with-your-own-usemodal-hook-context-api-3jg7
 * https://www.codeply.com/p/XuFoOU4GeS
 * https://www.dhiwise.com/post/the-ultimate-guide-to-react-click-outside-modal-to-close#integrating-the-modal-into-a-react-app
 * modal overlay : is used to make the modal appear on top of the page (stack order : appears on top of main page but under modal)
 */
import { Heading2 } from "./typography";
import { AddATask } from "./input/addATask";
import { useOpenModal, useClickOutside } from "../utils/hooks/openModal";

export function Modal() {
  const { modal, closeModal } = useOpenModal();

  const dropdownRef = useClickOutside(closeModal, modal);

  return (
    <>
      <section
        aria-modal="true"
        role="dialog"
        aria-hidden={modal}
        tabIndex={-1}
        className={`modal h-full w-full fixed top-0 right-0  ${
          modal ? "overflow-auto z-50 block" : "hidden overflow-hidden"
        }`}
      >
        <div
          role="document"
          className={`modal-content translate-y-0 w-1/2 h-full ${
            modal ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ModalHeader />
          <AddATask />
        </div>
      </section>
      {modal && (
        <div
          ref={dropdownRef}
          className="modal-overlay fixed top-0 right-0 opacity-50 z-40 w-full h-full bg-neutral-black"
        ></div>
      )}
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
