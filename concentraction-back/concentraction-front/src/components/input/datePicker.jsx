/** Date picker component from react datepicker library */

import { Body } from "../typography";

//Date picker imports
import DatePicker, {
  registerLocale,
  CalendarContainer,
} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//import to show french local datetime
import { fr } from "date-fns/locale/fr";
registerLocale("fr", fr);

// const MyContainer = ({ className, children }) => {
//     return (
//       <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
//         <CalendarContainer className={className}>
//           <div style={{ position: "relative" }}>{children}</div>
//         </CalendarContainer>
//       </div>
//     );
//   };

export default function InputDatePicker({onChange, value}) {

  return (
    <div
      className="date-wrapper flex flex-col gap-y-2"
    >
      <Body classBody="font-bold" body2={true}>
        Date example
      </Body>
          <DatePicker
            locale="fr"
            dateFormat="P"
            className="font-nunito text-base leading-6 border-solid border-b border-brand-blue bg-transparent"
            showIcon
            showTimeInput
            selected={value}
            toggleCalendarOnIconClick
            onChange={onChange}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 36 36"
                className="right-0"
              >
                <path
                  fill="#FF686B"
                  d="M32.25 6H29v2h3v22H4V8h3V6H3.75A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6"
                  className="clr-i-outline clr-i-outline-path-1"
                ></path>
                <path
                  fill="#FF686B"
                  d="M8 14h2v2H8z"
                  className="clr-i-outline clr-i-outline-path-2"
                ></path>
                <path
                  fill="#FF686B"
                  d="M14 14h2v2h-2z"
                  className="clr-i-outline clr-i-outline-path-3"
                ></path>
                <path
                  fill="#FF686B"
                  d="M20 14h2v2h-2z"
                  className="clr-i-outline clr-i-outline-path-4"
                ></path>
                <path
                  fill="#FF686B"
                  d="M26 14h2v2h-2z"
                  className="clr-i-outline clr-i-outline-path-5"
                ></path>
                <path
                  fill="#FF686B"
                  d="M8 19h2v2H8z"
                  className="clr-i-outline clr-i-outline-path-6"
                ></path>
                <path
                  fill="#FF686B"
                  d="M14 19h2v2h-2z"
                  className="clr-i-outline clr-i-outline-path-7"
                ></path>
                <path
                  fill="#FF686B"
                  d="M20 19h2v2h-2z"
                  className="clr-i-outline clr-i-outline-path-8"
                ></path>
                <path
                  fill="#FF686B"
                  d="M26 19h2v2h-2z"
                  className="clr-i-outline clr-i-outline-path-9"
                ></path>
                <path
                  fill="#FF686B"
                  d="M8 24h2v2H8z"
                  className="clr-i-outline clr-i-outline-path-10"
                ></path>
                <path
                  fill="#FF686B"
                  d="M14 24h2v2h-2z"
                  className="clr-i-outline clr-i-outline-path-11"
                ></path>
                <path
                  fill="#FF686B"
                  d="M20 24h2v2h-2z"
                  className="clr-i-outline clr-i-outline-path-12"
                ></path>
                <path
                  fill="#FF686B"
                  d="M26 24h2v2h-2z"
                  className="clr-i-outline clr-i-outline-path-13"
                ></path>
                <path
                  fill="#FF686B"
                  d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1"
                  className="clr-i-outline clr-i-outline-path-14"
                ></path>
                <path
                  fill="#FF686B"
                  d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1"
                  className="clr-i-outline clr-i-outline-path-15"
                ></path>
                <path
                  fill="#FF686B"
                  d="M13 6h10v2H13z"
                  className="clr-i-outline clr-i-outline-path-16"
                ></path>
                <path fill="none" d="M0 0h36v36H0z"></path>
              </svg>
            }
          />
    </div>
  );
}
