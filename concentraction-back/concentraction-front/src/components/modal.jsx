/** Modal that shows up to add or update a task
 * https://blog.openreplay.com/creating-easy-custom-modals-with-react/
 * https://dev.to/alexandprivate/your-next-react-modal-with-your-own-usemodal-hook-context-api-3jg7
 * https://www.codeply.com/p/XuFoOU4GeS
 */
import { Heading2 } from "./typography";
import { AddATask } from "./input/addATask";
import useOpenModal from "../utils/hooks/openModal";

export function Modal() {
  const { modal } = useOpenModal();
  return (
    <section className={`modal h-full w-full fixed z-50 top-0 left-0 ${modal ? "overflow-auto" : "overflow-hidden"}`} >
      <div className={`modal-content translate-y-0 ${modal ? "-translate-x-1/2" : "-translate-x-full"}`}>
      <ModalHeader />
      <AddATask />
      </div>
    </section>
  );
}

function ModalHeader() {
  return (
    <div className="modal-header">
      <Heading2></Heading2>
    </div>
  );
}
