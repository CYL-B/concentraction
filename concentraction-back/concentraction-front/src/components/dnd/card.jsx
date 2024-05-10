/**Element that represents a task in a given list 
* cardDivider : divider between title and date 
* cardDeleteButton : button to delete the task 
* cardUpdateButton : button to update the task (triggers modal)**/

import { Body } from "../typography";
import Tag from "../tags";
import IconifyIcon from "../icon";

export default function Card({ cardTitle, cardDate, cardTag,...cardProps }) {
  //only creates a new card if given a title and due date
  if (cardTitle && cardDate) {
    return (
      <div {...cardProps } className="flex justify-between items-end min-w-[296px] h-fit bg-brand-blue rounded-xl p-2">
        <div className="left-section">
          <Body classBody="font-bold text-neutral-white pb-1 text-shadow-card">
            {cardTitle}
          </Body>
          <CardDivider />
          <Body
            classBody="text-neutral-white pt-1 text-shadow-card"
            body2={true}
          >
            {cardDate}
          </Body>
        </div>
        <div className="middle-section">{cardTag && <Tag>{cardTag}</Tag>}</div>
        <div className="right-section flex flex-col">
          <CardDeleteButton />
          <CardUpdateButton />
        </div>
      </div>
    );
  } else {return}
}

function CardDivider() {
  return <hr className="text-neutral-white"></hr>;
}

function CardDeleteButton() {
  return (
    <button>
      <IconifyIcon
        width={20}
        height={20}
        iconName="system-uicons:chevron-right"
        iconClassName="text-neutral-white text-shadow-card"
      />
    </button>
  );
}

function CardUpdateButton() {
  return (
    <button>
      <IconifyIcon
        width={20}
        height={20}
        iconName="system-uicons:cross-circle"
        iconClassName="text-neutral-white text-shadow-card"
      />
    </button>
  );
}
