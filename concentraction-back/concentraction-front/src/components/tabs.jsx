import { useState } from "react";
export default function Tabs({ tabsIds=[], getHeader = () => {}, renderContent = () => {} }) {

    //state active = takes the first element in the tabsIds array and sets it as the default open/active tab
    //tabsId = array which includes each name of the tabs
    //getHeader = function passed as a prop which returns the name of each tab button 
    //renderContent = function passed as a prop which returns the active content based on the active tab id. 
  const [active, setActive] = useState(tabsIds[0]);

  return (
    <>
      <ul className="tab__menu flex justify-around">
        {tabsIds.map((tabId) => {
          return (
            <li key={tabId} className="tab__link">
              <a href="#" onClick={() => setActive(tabId)}>
                <span>{getHeader(tabId)}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <div className="tab__container">
        <div id={active} className="tab__content">
          {renderContent(active)}
        </div>
      </div>
    </>
  );
}
