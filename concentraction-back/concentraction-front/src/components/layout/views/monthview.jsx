import { useContext } from "react";

import CalendarWrapper from "../../calendar/calendarWrapper";
import { Button } from "../../button";
import { Heading4 } from "../../typography";
import ObjectivesSection from "../../objectives/objectivesSection";

import { ModalContext } from "../../modal/modalContext";


export function MonthView() {
  const { handleOpenModal } = useContext(ModalContext);

  const openModal = () => {
    handleOpenModal()
  }
  return (
    <section className="Monthview mt-[100px]">
      <div className="Monthview__calendar flex mb-6">
        <div className="Monthview__objectives basis-1/4 flex flex-col ">
          <Heading4 classHeading="underline mb-8">OBJECTIVES</Heading4>
          <ObjectivesSection />
        </div>
        <CalendarWrapper />
      </div>
      <div className="Monthview__buttons flex justify-between w-100">
        <Button variant="secondary">Today</Button>
        <Button onClick={openModal}>New Task</Button>
      </div>
    </section>
  );
}
