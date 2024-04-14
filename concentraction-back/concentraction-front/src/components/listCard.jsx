import { Heading4 } from "./typography";
import IconifyIcon from "./icon";
import { AddButton } from "./button";
import useDroppable from "../utils/hooks/droppableHook";

export default function ListCard({ listTitle, listId, listBodyId, children }) {

    const handleDelete = () => {
        console.log("delete")
    }
  return (
    <div
      id={listId}
      {...useDroppable(listId) 
      }
      className="w-fit border border-solid border-color-neutral-black"
    >
      <div className="list-header flex justify-between items-center border-b border-solid border-color-neutral-black">
        <Heading4>{listTitle}</Heading4>
        <button onClick={handleDelete}>
          <IconifyIcon height={20} width={20} iconName="ph:trash-thin" />
        </button>
      </div>
      <div id={listBodyId} className="list-body">
        {children}
      </div>
      <div className="list-footer border-t border-solid border-color-light-grey">
        <AddButton addButtonClass="m-auto" addText={true}>Ajouter</AddButton>
      </div>
    </div>
  );
}
