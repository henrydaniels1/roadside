// import { StyleSheet, View } from 'react-native';
// import { useEffect, useRef } from 'react';
// import { Player } from '@lordicon/react';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);





function Navbar ()
{
    return (
        <>
            
            <div className="w-full">
                <div className="w-full  p-2 flex justify-between">
                    <div className="space-y-2 text-white flex flex-col items-center justify-center">
                        <p>Home</p> 
                        <div>
                           <lord-icon src="https://cdn.lordicon.com/qeltvbrs.json" trigger="loop" stroke="bold" delay="2000"
                s           style={{width:"25px", height:"25px"}}></lord-icon>
                        </div>
                    </div>
                    <div className="space-y-2 text-white flex flex-col items-center justify-center">
                        <p>History</p> 
                        <div>
                            <lord-icon
    src="https://cdn.lordicon.com/xsqjakgm.json"
    trigger="loop"
    delay="2000"
      style={{width:"25px", height:"25px"}}>
</lord-icon>
                        </div>
                    </div>
                    <div className="space-y-2 text-white  flex flex-col items-center justify-center">
                        <p>Notification</p> 
                        <div></div>
                    </div>
                    <div className="space-y-2 text-white  flex flex-col items-center justify-center">
                        <p>Profile</p> 
                        <div></div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}


export default Navbar;