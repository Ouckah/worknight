import SideBar from "../components/SideBar";

import { Button, Input } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import Image from "next/image";

export default function Home() {
  return (
    
    <>
      
      <div className="flex flex-row w-full h-screen bg-gray-100">
        <SideBar />
        <div className="MAIN flex flex-col justify-center items-center w-full h-full bg-gray-100 p-24">
          <Image className="rotate-180" src={"/logo.png"} width={400} height={400}/>
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input type='email' placeholder="someone@gmail.com" />
            <FormLabel>Password</FormLabel>
            <Input type='password' placeholder="iLoVeLaUnChPaD2023"/>
            <Button
              mt={4}
              colorScheme='teal'
              type='submit'
            >
              Submit
            </Button>
          </FormControl>
        </div>
      </div>
    
    </>
    
  )
}
