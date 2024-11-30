import { useState } from "react";
import Checkbox from "../input/checkbox";
import { Input } from "../input/input";
import { FormTwo } from "../input/form";

import { GET_USER_OBJECTIVES } from "../../services/queries.jsx";
import { useQuery } from "@apollo/client";



export default function ObjectivesSection() {
    const [objectives, setObjectives] = useState([]);
    const { data, loading, error } = useQuery(GET_USER_OBJECTIVES, {
        onCompleted: (data) => {
          //add confirmation message
          var dataFrom = data.getObjectives.user.objectives;
          setObjectives([...objectives,dataFrom]);
        },
        update(cache, { data }) {
          //current state of tasks
          const { objectives } = cache.readQuery({
            query: GET_USER_OBJECTIVES,
          });
          //change the data within the cache for get user tasks, copying current tasks and adding the new one
          cache.writeQuery({
            query: GET_USER_OBJECTIVES,
            data: {
              user: {
                objectives: [data.addObjective, ...objectives],
              },
            },
          });
        },
      });
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