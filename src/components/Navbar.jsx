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
            
            <div className="w-full bg-blue-900">
                <div className="w-full  py-2 px-4 flex justify-between">
                    <div className="space-y-2 text-white flex flex-col-reverse items-center justify-center">
                        <p>Home</p> 
                        <div>
                           <lord-icon
    src="https://cdn.lordicon.com/wmwqvixz.json"
    trigger="loop"
    delay="5000"
    style={{width:"25px", height:"25px"}}>
</lord-icon>
                        </div>
                    </div>
                    <div className="space-y-2 text-white flex flex-col-reverse items-center justify-center">
                        <p>Orders</p> 
                        <div>
                          <lord-icon
    src="https://cdn.lordicon.com/dafdkyyt.json"
    trigger="loop"
    delay="5000"
    style={{width:"25px", height:"25px"}}>
</lord-icon>
                        </div>
                    </div>
                    <div className="space-y-2 text-white  flex flex-col-reverse items-center justify-center">
                        <p>Notification</p> 
                        <div>
                            <lord-icon
    src="https://cdn.lordicon.com/lznlxwtc.json"
    trigger="loop"
    delay="5000"
    style={{width:"25px", height:"25px"}}>
</lord-icon>
                        </div>
                    </div>
                    <div className="space-y-2 text-white  flex flex-col-reverse items-center justify-center">
                        <p>Chat</p> 
                        <div>
                           <lord-icon
    src="https://cdn.lordicon.com/ayhtotha.json"
    trigger="loop"
    delay="5000"
    style={{width:"25px", height:"25px"}}>
</lord-icon>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}


export default Navbar;