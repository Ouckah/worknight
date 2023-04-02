import SideBar from "../components/SideBar";

import "react-big-calendar/lib/css/react-big-calendar.css";
import MyCalendar from "../components/MyCalendar";
import ClassesCardHolder from "../components/Classes Card Holder";

import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons'

export default function Summary() {

    return (
        <>
            <div className="flex flex-row w-full h-screen bg-gray-100">
                <SideBar />
                <div className='flex flex-row w-full p-24'>
                    <div className="flex flex-col w-2/3">
                        <MyCalendar />
                        <div className="flex flex-col bg-gray-200 w-5/6 rounded-md">
                            <h3 className="p-2 text-5xl text-gray-600 font-bold underline mt-5 mx-5">Graduation Status:</h3>
                            <div className="flex flex-row">
                                <div className="flex flex-col items-center justify-center gap-5 w-20">
                                    <CheckCircleIcon w={25} h={25} color="green.500" />
                                    <WarningIcon w={25} h={25} color="yellow.500" />
                                    <WarningIcon w={25} h={25} color="yellow.500" />
                                </div>
                                <div className="flex flex-col items-center justify-center gap-3 w-full p-5">
                                    <h4 className="text-2xl text-gray-500">You're on track to graduate according to schedule! (4 Years)</h4>
                                    <h4 className="text-2xl">You will need to overload next semester to complete your Math Minor!</h4>
                                    <h4 className="text-2xl">You will need to override your CS 382 class!</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ClassesCardHolder title="Degree Criteria" primary />
                </div> 
            </div>
        </>

    )

}