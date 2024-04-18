import { DAYVIEW_SECTIONS } from "../constants/boardSections";
import { getTasksByStatus } from "./getTasks";

//creates an object with tasks sorted by status (from dayview sections)
export function useInitializeLists(tasks) {
  const listSections = {};

  Object.keys(DAYVIEW_SECTIONS).forEach((listSectionKey) => {
    listSections[listSectionKey] = getTasksByStatus(tasks, listSectionKey);
  });

  return listSections;
}

//returns the list with the right id (simple list section as an object or listsections with nested objects inside which requires to loop)
export function useFindListSectionContainer(listSections, id) {
  if (id in listSections) {
    return id;
  }

  const container = Object.keys(listSections).find((key) =>
    listSections[key].find((item) => item.id === id)
  );
  return container;
}
