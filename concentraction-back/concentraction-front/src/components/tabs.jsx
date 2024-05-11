/** Tabs used in dashboard page to show day view, week view and month view */
import { useState } from "react";
import { Heading3 } from "./typography";
export default function Tabs({
  tabsIds = [],
  getHeader = () => {},
  renderContent = () => {},
  tabMenuClassName,
}) {
  //state active = takes the first element in the tabsIds array and sets it as the default open/active tab
  //tabsId = array which includes each name of the tabs
  //getHeader = function passed as a prop which returns the name of each tab button
  //renderContent = function passed as a prop which returns the active content based on the active tab id.
  const [active, setActive] = useState(tabsIds[0]);

  return (
    <>
      <ul className={`tab__menu flex justify-around gap-5 ${tabMenuClassName}`}>
        {tabsIds.map((tabId) => {
          return (
            <li
              key={tabId}
              className={`tab__link pb-2 border-b-2 border-solid transition-all ease-in-out duration-300 ${
                active == tabId
                  ? "active text-brand-blue border-brand-blue"
                  : " inactive text-dark-grey border-transparent"
              }`}
            >
              <a href="#" onClick={() => setActive(tabId)}>
                <Heading3>{getHeader(tabId)}</Heading3>
              </a>
            </li>
          );
        })}
      </ul>
      <div className="tab__container h-screen">
        <div id={active} className="tab__content h-full">
          {renderContent(active)}
        </div>
      </div>
    </>
  );
}
