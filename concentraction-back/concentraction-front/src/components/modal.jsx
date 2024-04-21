import { Dropdown } from "./input/dropdown";
import { FormTwo } from "./input/form";
import InputDatePicker from "./input/datePicker";
import { Heading2 } from "./typography";
import { Button } from "./button";
import IconifyIcon from "./icon";
import { Input } from "./input/input";

export function Modal() {
  return (
    <div>
      <FormTwo>
        <Input></Input>
      </FormTwo>
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
