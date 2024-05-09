import { MiniCard } from "./cardMini";
import {Day} from "./day"

export default function CalendarWrapper({  }) {

    return (
        <div className="calendarWrapper flex flex-wrap">
            <Day day="1"><MiniCard>Name of Task</MiniCard></Day>
            <Day day="1"></Day>
            <Day day="1"></Day>
            <Day day="1"></Day>
            <Day day="1"></Day>
            <Day day="1"></Day>
            <Day day="1"></Day>
            <Day day="1"></Day>
            
        </div>
    )

}