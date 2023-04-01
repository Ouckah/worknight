import ClassesCardHolder from "../components/Classes Card Holder";

export default function Course() {
    return (
      
      <>

        <div className="flex flex-row w-full h-screen">
            <div className="SIDEBAR w-36 h-full bg-gray-200">

            </div>
            <div className="MAIN flex flex-row w-full h-full bg-gray-100 p-24">
                <ClassesCardHolder title="Expected Classes"/>
                <div className="flex flex-col w-1/3 p-10 h-full bg-gray-100">

                </div>
                <ClassesCardHolder title="Selected Classes"/>
            </div>
        </div>
      
      </>
      
    )
  }
  