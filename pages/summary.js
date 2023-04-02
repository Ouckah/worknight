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
                            
                    </div>
                    <ClassesCardHolder title="Degree Criteria" primary/>
                </div> 
            </div>
        </>
        

    )

}