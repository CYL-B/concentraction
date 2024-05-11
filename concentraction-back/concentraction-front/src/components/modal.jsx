/** Modal that shows up to add or update a task */
import { Heading2 } from "./typography";
import { AddATask } from "./input/addATask";
export function Modal() {
  return (
    <div>
      <ModalHeader />
      <AddATask />
    </div>
  );
}

function ModalHeader() {
  return (
    <div className="modal-header">
      <Heading2></Heading2>
    </div>
  );
}
