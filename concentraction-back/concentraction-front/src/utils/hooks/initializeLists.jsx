/** Ref documentation TDL */
import { DAYVIEW_SECTIONS } from "../constants/boardSections";
import { getTasksByStatus } from "./getTasks";

export function useInitializeLists(tasks) {
  const listSections = {};
  //creates an object with tasks sorted by status (from dayview sections) : {todo:[], ongoing:[], done:[]}

  Object.keys(DAYVIEW_SECTIONS).forEach((listSectionKey) => {
    // listSectionKey.toLowerCase().trim();
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
