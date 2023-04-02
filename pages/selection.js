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

export default function Selection() {

    return (
      
      <>

        <div className="flex flex-row w-full h-screen bg-gray-100">
            <SideBar />
            <div className="MAIN flex flex-col w-full h-full bg-gray-100 p-24">
                <div className="w-2/3 h-full">

                </div>
                <div className="w-1/3 h-full">
                    <TableContainer>
                        <Table variant='simple'>
                            <TableCaption>CS 385 Class Sections</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Professor</Th>
                                    <Th>Weekly Days</Th>
                                    <Th>Time</Th>
                                    <Th>Room</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>Philippe Meunier</Td>
                                    <Td>M W F</Td>
                                    <Th>11:00 AM - 11:50 AM</Th>
                                    <Td>Gateway South 021</Td>
                                </Tr>
                                <Tr>
                                    <Td>Philippe Meunier</Td>
                                    <Td>M W F</Td>
                                    <Th>10:00 AM - 10:50 AM</Th>
                                    <Td>Morton 230</Td>
                                </Tr>
                                <Tr>
                                    <Td>Philippe Meunier</Td>
                                    <Td>M W F</Td>
                                    <Th>2:00 PM - 2:50 PM</Th>
                                    <Td>Palmer 320</Td>
                                </Tr>
                                <Tr>
                                    <Td>Aidan Ouckama</Td>
                                    <Td>T H</Td>
                                    <Th>9:00 AM - 11:59 PM</Th>
                                    <Td>Your Mother's House</Td>
                                </Tr>
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>Professor</Th>
                                    <Th>Weekly Days</Th>
                                    <Th>Time</Th>
                                    <Th>Room</Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>
                </div>
                <div className="w-full h-full">
                    <TableContainer>
                        <Table variant='simple'>
                            <TableCaption>Semester Schedule</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Code</Th>
                                    <Th>Class Name</Th>
                                    <Th>Professor</Th>
                                    <Th>Weekly Days</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>CS 385</Td>
                                    <Td>Algorithms</Td>
                                    <Td>Philippe Meunier</Td>
                                    <Td>M W F</Td>
                                </Tr>
                                <Tr>
                                    <Td>CS 382</Td>
                                    <Td>Computer Architecture and Org.</Td>
                                    <Td>Shudong Hao</Td>
                                    <Td>M W F</Td>
                                </Tr>
                                <Tr>
                                    <Td>MA 331</Td>
                                    <Td>Intermediate Statistics</Td>
                                    <Td>Xiaohu Li</Td>
                                    <Td>T H</Td>
                                </Tr>
                                <Tr>
                                    <Td>MA 232</Td>
                                    <Td>Linear Algebra</Td>
                                    <Td>Andrey Nikolaev</Td>
                                    <Td>T H</Td>
                                </Tr>
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>Code</Th>
                                    <Th>Class Name</Th>
                                    <Th>Professor</Th>
                                    <Th>Weekly Days</Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>

      </>

    )
}