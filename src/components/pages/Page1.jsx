import Top from '../Top'
import Navbar from '../Navbar'
import Pay from './Pay'



function Page1 ()
{
  
    return (
        <div className="h-[100svh] w-full">
           
            <Top />

            <div className="mt-[6rem]">
                <Pay />
            </div>
           
            <div className="lg:hidden">
                <Navbar />
            </div>
            
        </div>
    )
}
export default Page1