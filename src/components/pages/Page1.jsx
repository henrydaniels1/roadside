import Top from '../../components/Top'
import Navbar from '../../components/Navbar'

function Page1 ()
{
    return (
        <>
            <div className="h-[100svh] w-full">
                <div className="h-full w-full  flex ">
                    <div className='w-full flex flex-col justify-between'>
                        <Top/>

                        <div className="main">

                        </div>
                    
                        <Navbar/>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Page1