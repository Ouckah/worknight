import { SettingsIcon, CalendarIcon, CheckCircleIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons'
import Link from 'next/link';

const SideBar = () =>
{
    return (

        <>
        
            <div className="SIDEBAR flex flex-col justify-evenly items-center w-36 h-full bg-gray-200">
                <Link href="/">
                    <SettingsIcon className="hover:blur-sm duration-300 transition-all" boxSize={75} color="gray.600" />
                </Link>
                <Link href="/course">
                    <EditIcon className="hover:blur-sm duration-300 transition-all" boxSize={75} color="gray.600" />
                </Link>
                <CalendarIcon className="hover:blur-sm duration-300 transition-all" boxSize={75} color="gray.600" />
                <RepeatIcon className="hover:blur-sm duration-300 transition-all" boxSize={75} color="gray.600" />
                <CheckCircleIcon className="hover:blur-sm duration-300 transition-all" boxSize={75} color="gray.600" />
            </div>
        
        </>

    )
}

export default SideBar;