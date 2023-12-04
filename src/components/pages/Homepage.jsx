// import { Link } from 'react-router-dom';


function Home ()
{
    return (
        <>
            <div className="h-[100svh] bg-[#4faeac] w-full">
                <div className="w-full h-full  flex items-end justify-center ">

                    <div className="h-[50svh] w-full flex items-center flex-col  ">
                        <div className=" h-full flex flex-col justify-between pb-10 items-center w-full ">
                            <div className="text-[2rem] text-white">ROAD SIDE</div>
                            {/* <Link to='/Page1'> */}
                                <div className="flex justify-end text-[1.5rem]"><button className="rounded-lg text-purple-900 bg-white p-4">Get Started</button></div>
                            {/* </Link> */}
                        </div>
                        
                    </div> 

                </div>
            </div>
        </>
    )
}

export default Home;