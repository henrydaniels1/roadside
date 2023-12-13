import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import img from '/img1.png'
import Profile from '../components/pages/profile'
import { useState } from "react";
import { motion } from 'framer-motion';
defineElement(lottie.loadAnimation);




function Top ()
{
  const [ toggle, setToggle ] = useState( false );

  return (
      

      <>
        
            <div className="w-full fixed top-0 left-0">
                <div className="w-full  p-4  bg-[#EBEDF5] ">
                    <div className="w-full flex justify-between items-center">
                        <div className="w-[86%]">
                            <input type="search" placeholder="Find Services" className="w-full rounded-lg py-2 px-4" />
                            
            </div>
            
             <motion.div
                       whileHover={{ scale: 1.2, rotate: 90 }}
  whileTap={{
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%"
  }}
              
                        transition={{duration:.2}}>
            <div className=" relative" onClick={() => setToggle(!toggle)}>
              <div className=" flex rounded-full items-center justify-center" type="button">
                <img className="w-10 h-10 rounded-full" src={ img } alt="user photo" />
              </div>

               { toggle && (
                <div className="mt-[6rem] absolute top-[-2.5rem] left-[-9rem]"><Profile/></div>
              ) }
              
            </div>
</motion.div>
      
                  </div>
                </div>
            </div> 
    </>
 
  )
  
}

export default Top