import Checkbox from "../input/checkbox";
import { Input } from "../input/input";
import { FormTwo } from "../input/form";

export default function ObjectivesSection() {
    return (
            <FormTwo formClassName={"objectives-section flex flex-col gap-4"}>
            <Checkbox
                name="objective1"
                placeholder="Objective 1"
                checkboxTitle="Objective 1"
            />
            <Checkbox
                name="objective2"
                placeholder="Objective 2"
                checkboxTitle="Objective 2"
            />
            <Checkbox
                name="objective3"
                placeholder="Objective 3"
                checkboxTitle="Objective 3"
            />
            <Input
                name="objective4"
                placeholder="Objective 4"
                type="text"
            />
            </FormTwo>
    );
}