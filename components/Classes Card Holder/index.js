const ClassesCardHolder = ({ title }) =>
{
    
    return (

        <>
        
            <div className="flex flex-col items-center w-1/3 p-10 h-full bg-gray-200 rounded-2xl">
                <h1 className="text-gray-500 font-bold text-5xl text-center p-5">
                    { title }
                </h1>
                <div className="CLASSES flex flex-col gap-5 w-full h-full">
                    <div className="w-full h-16 bg-gray-300 rounded-2xl">

                    </div>
                    <div className="w-full h-16 bg-gray-300 rounded-2xl">

                    </div>
                    <div className="w-full h-16 bg-gray-300 rounded-2xl">

                    </div>
                    <div className="w-full h-16 bg-gray-300 rounded-2xl">

                    </div>
                    <div className="w-full h-16 bg-gray-300 rounded-2xl">

                    </div>
                    <div className="w-full h-16 bg-gray-300 rounded-2xl">

                    </div>
                </div>
            </div>
        
        </>

    )
}

export default ClassesCardHolder;