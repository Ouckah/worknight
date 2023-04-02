import SideBar from "../components/SideBar";

import { Button, Input } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import Image from "next/image";
import Link from "next/link";

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
            <Link href="/course">
              <Button
                mt={4}
                colorScheme='teal'
                type='submit'
              >
                Submit
              </Button>
            </Link>
          </FormControl>
        </div>
      </div>
    
    </>
    
  )
}
