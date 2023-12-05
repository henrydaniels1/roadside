import Top from '../Top'
import Navbar from '../Navbar'
import Pay from './Pay'

function Page1 ()
{
    return (
        <div className="h-[100svh] w-full">
            <Top />
            <Pay/>
            <Navbar/>
        </div>
    )
}
export default Page1