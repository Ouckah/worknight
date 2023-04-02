import SideBar from "../components/SideBar";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

import "react-big-calendar/lib/css/react-big-calendar.css";
import MyCalendar from "../components/MyCalendar";
import ClassesCardHolder from "../components/Classes Card Holder";

export default function Summary() {

    return (
        <>
            <div className="flex flex-row w-full h-screen bg-gray-100">
            <SideBar />
                <div className='flex flex-row p-24'>
                    <div className = "flex flex-col">
                        <MyCalendar />
                        <div className="bg-gray-200 w-5/6 rounded-md">
                            <label className="p-2 text-5xl underline font-mono">Graduation Status:</label>
                            <label className= "p-4 text-2xl font-mono">You're on track to graduate according to schedule!</label>
                        </div>
                    </div>
                    <ClassesCardHolder title="Degree Criteria" primary/>
                </div> 
            </div>
        </>

    )

}