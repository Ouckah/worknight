import { Calendar } from "react-big-calendar";
import { momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

const state = {
    events: [
        {
            title: "CS 385",
            start: new Date(2023, 2, 27, 11),
            end: new Date(2023, 2, 27, 11, 50),
        },
        {
            title: "CS 385",
            start: new Date(2023, 2, 29, 11),
            end: new Date(2023, 2, 29, 11, 50),
        },
        {
            title: "CS 385",
            start: new Date(2023, 2, 31, 11),
            end: new Date(2023, 2, 31, 11, 50),
        },
        {
            title: "CS 382",
            start: new Date(2023, 2, 28, 10),
            end: new Date(2023, 2, 28, 11, 50),
        },
        {
            title: "CS 385-R",
            start: new Date(2023, 2, 30, 11),
            end: new Date(2023, 2, 30, 11, 50),
        },
        {
            title: "MA 331",
            start: new Date(2023, 2, 28, 15),
            end: new Date(2023, 2, 28, 16, 15),
        },
        {
            title: "MA 331",
            start: new Date(2023, 2, 30, 15),
            end: new Date(2023, 2, 30, 16, 15),
        },
        {
            title: "MA 232",
            start: new Date(2023, 2, 28, 12, 30),
            end: new Date(2023, 2, 28, 13, 45),
        },
        {
            title: "MA 232",
            start: new Date(2023, 2, 30, 12, 30),
            end: new Date(2023, 2, 30, 13, 45),
        },
    ]
};

const MyCalendar = () =>
{
    return (

        <>
        
            <Calendar
                className="pr-24 pb-10"
                localizer={localizer}
                defaultDate={new Date(2023, 3, 1)}
                defaultView="month"
                events={state.events}
                style={{ height: "50vh" }}
            />
        
        </>

    )
}

export default MyCalendar;