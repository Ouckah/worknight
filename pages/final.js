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

import { Button, ButtonGroup, Stack } from '@chakra-ui/react'

import MyCalendar from "../components/MyCalendar";

export default function Final() {
    
    return (
        <>
            <div className="flex flex-row w-full h-screen bg-gray-100">
                <SideBar />
                <div className="MAIN flex flex-col w-full h-full bg-gray-100 p-24 relative">
                        <div className="w-full h-full">
                            <MyCalendar />
                        </div>
                        <Stack spacing = {12} direction = 'row' align = 'center' position = 'relative'>
                        <Button
                            colorScheme='red'
                            size = 'lg'>
                        Deny
                        </Button>
                        <Button
                            colorScheme='green'
                            size = 'lg'>
                        Accept
                        </Button>
                        </Stack>
                </div>                        
            </div>
        </>
        
    )

}