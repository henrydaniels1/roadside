import mech from '/mecha.jpg'
import phone from '/serv.jpg'

function Container1 ()
{
    return (
        <>
            <div className="w-full">
                <div className="w-full mx-auto  flex justify-between items-center">

                   <div className="w-[48%] rounded-lg  pt-2 bg-[#01547C] space-y-4 flex flex-col px-2 justify-center">
                        <div className="flex items-center justify-center"><img src={ mech }></img></div>
                        <div className="text-white">Phone repairs</div>
                    </div>   
                   <div className="w-[48%] rounded-lg  pt-2 bg-[#01547C] space-y-4 flex flex-col px-2 justify-center">
                        <div className="flex items-center justify-center"><img src={ phone }></img></div>
                        <div className="text-white">Phone repairs</div>
                    </div>    
                       
                    
                </div>
            </div>
        
        </>
    ) 

   
}


export default Container1