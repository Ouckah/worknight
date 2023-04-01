import ClassesCardHolder from "../components/Classes Card Holder";
import SideBar from "../components/SideBar";

export default function Course() {
    return (
      
      <>

        <div className="flex flex-row w-full h-screen">
            <SideBar />
            <div className="MAIN flex flex-row w-full h-full bg-gray-100 p-24">
                <ClassesCardHolder title="Expected Classes" primary/>
                <ClassesCardHolder title="Degree Criteria" secondary/>
                <ClassesCardHolder title="Selected Classes" primary/>
            </div>
        </div>
      
      </>
      
    )
  }
  