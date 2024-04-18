//returns all tasks with the same status
export const getTasksByStatus = (tasks, status) => {
    return tasks.filter((task) => task.status === status);
  };
  
  //returns task with the right id
  export const getTaskById = (tasks, id) => {
    return tasks.find((task) => task.id === id);
  };
  