import { useEffect } from "react";
import { AddATask } from "../components/modal/addATask";

// import { useFetchTasks } from "../features/tasks/tasks";

// import {selectTasks} from "../utils/selectors";

export default function Backlog() {
//   //demo store
//   const store = useStore();
// const tasks = useSelector(selectTasks);

// const tasksList = tasks.data;

  // useEffect(() => {
  //   useFetchTasks(store);
  // }, [store]);

  // if (tasks.status == 'rejected'){
  //   return <span>Il y a un problème</span>
  // }

  //to show a loader
  //const isLoading = tasks.status == 'pending' || tasks.status == 'void'
  return (
    <>
      <div id="Backlog" className="bg-brand-red">
        <AddATask />
      </div>
    </>
  );
}
