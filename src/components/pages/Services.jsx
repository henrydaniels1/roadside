import dele from '/del.jpg'



function Services ()
{
    return (
        <>
            <div className="w-full rounded-lg ">
                <div className="w-full bg-[#006F95] mx-auto flex rounded-lg">

                    <div className=" w-[40%] p-2 space-y-6">
                        <div  className="space-y-6">
                        <p className="font-bold text-[1.5rem] ">Become a Service seller</p>
                        <p className="">Get more money using your skill</p>
                        </div>
                        <div><button className="p-2 rounded-xl bg-purple-500 text-white">Create now &rarr;</button></div>
                    </div>
                    <div className=" w-[60%]  flex items-center justify-center ">
                        <div className="h-[15rem]"><img src={dele} className="h-full"></img></div>
                        
                    </div>
                    
                    
                </div>
        </div>
        </>
    )
}

export default Services