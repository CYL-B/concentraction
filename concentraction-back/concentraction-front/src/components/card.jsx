import { Body } from "./typography";
import Tag from "./tags";
import IconifyIcon from "./icon";

export default function Card({ cardTitle, cardDate }) {
  return (
    <div className="flex justify-between items-end min-w-[296px] h-fit bg-brand-blue rounded-xl p-2">
      <div className="left-section">
        <Body classBody="font-bold text-neutral-white pb-1 text-shadow-card">{cardTitle}</Body>
        <CardDivider />
        <Body classBody="text-neutral-white pt-1 text-shadow-card" body2={true}>
          {cardDate}
        </Body>
      </div>
      <div className="middle-section"></div>
      <Tag>CardTag</Tag>
      <div className="flex flex-col right-section">
        <CardDeleteButton />
        <CardUpdateButton />
      </div>
    </div>
  );
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
