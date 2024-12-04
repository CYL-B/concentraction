/** Tasks of the day
 * MUST INCLUDE query from back end to make it dynamic
 */
import { GET_USER_TASKS } from "../services/queries";
import { useApolloClient } from "@apollo/client";

export function getTasksByDate() {
  const client = useApolloClient();
  const { tasks } = client.readQuery({
    query: GET_USER_TASKS,
    // Provide any required variables in this object.
  });
  console.log("tasks", tasks);

  const DAY_TASKS_BY_DATE = [
    {
      id: "Title 2",
      title: "Title 2",
      date: "3 mai 2054",
      description: "Desc 2",
      status: "todo",
    },
    {
      id: "Title 3",
      title: "Title 3",
      date: "3 juin 2054",
      description: "Desc 3",
      status: "ongoing",
    },

    {
      id: "Title 4",
      date: "23 octobre 2045",
      title: "Title 4",
      description: "Desc 4",
      status: "done",
    },
  ];

  return DAY_TASKS_BY_DATE;
}


export const DAY_TASKS = [
  {
    id: "Title 2",
    title: "Title 2",
    date: "3 mai 2054",
    description: "Desc 2",
    status: "todo",
  },
  {
    id: "Title 3",
    title: "Title 3",
    date: "3 juin 2054",
    description: "Desc 3",
    status: "ongoing",
  },

  {
    id: "Title 4",
    date: "23 octobre 2045",
    title: "Title 4",
    description: "Desc 4",
    status: "done",
  },
];
