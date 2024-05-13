/** Modal that shows up to add or update a task
 * https://blog.openreplay.com/creating-easy-custom-modals-with-react/
 * https://dev.to/alexandprivate/your-next-react-modal-with-your-own-usemodal-hook-context-api-3jg7
 * https://www.codeply.com/p/XuFoOU4GeS
 * https://www.dhiwise.com/post/the-ultimate-guide-to-react-click-outside-modal-to-close#integrating-the-modal-into-a-react-app
 * modal overlay : is used to make the modal appear on top of the page (stack order : appears on top of main page but under modal)
 */
import { Heading2 } from "./typography";
import { AddATask } from "./input/addATask";
import { useOpenModal } from "../utils/hooks/openModal";

export function Modal() {
  const { modal, closeModal, handleOpenModal, ref } = useOpenModal();

  return (
    <>
      <section
        aria-modal="true"
        aria-hidden={!modal}
        ref={ref}
        tabIndex={-1}
        className={`modal-backdrop fixed top-0 right-0 h-full w-full bg-neutral-black bg-opacity-60 flex ${
          modal ? "inline-block z-40" : "hidden z-0"
        }`}
      >
        <div
          aria-labelledby="Add a task"
          role="dialog"
          className={`modal-content translate-y-0 w-1/2  ${
            modal ? "translate-x-0" : "-translate-x-full"
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
