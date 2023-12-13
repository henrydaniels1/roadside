import mech from '/mechanic1.png'
import phone from '/service.png'
import Info from './Info.jsx'
import {motion} from 'framer-motion'
 
function Container1 ()
{
    return (
        <>
            <div className="w-full">
                <div className="w-full mx-auto  flex justify-between items-center">

                    <motion.div
                        initial={ { x: 10, y: 20 } }
                        animate={ { x: 20, y: 20 } }
                        transition={{duration:2}}
                    className="w-[48%] rounded-lg  pt-2 bg-[#01547C] space-y-4 flex flex-col px-2 justify-center items-center">
                   <div >
                        <div className="flex items-center justify-center"><img src={ mech }></img></div>
                        <div className="text-white">Phone repairs</div>
                    </div>   
                    </motion.div>
                    <motion.div
                        initial={ { x: 10, y: 20 } }
                        animate={ { x: 20, y: 20 } }
                        transition={{duration:2}}
                    className="w-[48%] rounded-lg  pt-2 bg-[#01547C] space-y-4 flex flex-col px-2 justify-center items-center">
                   <div >
                        <div className="flex items-center justify-center"><img src={ mech }></img></div>
                        <div className="text-white">Phone repairs</div>
                    </div>   
                    </motion.div>
                     
                       
                    
                </div>
            </div>
        
        </>
    ) 

   
}


export default Container1