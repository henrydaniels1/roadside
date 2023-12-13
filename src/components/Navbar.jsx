import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

defineElement(lottie.loadAnimation);





function Navbar ()
{
    return (
        <>
            
            <div className="w-full bg-[#EBEDF5] fixed bottom-0 left-0 mt-[6rem]">
                <div className="w-full  py-2 px-4 flex justify-between">
                    <div className="space-y-2 text-black flex flex-col-reverse items-center justify-center">
                        <p className="font-semibold	">Home</p> 
                        <div>
                            <lord-icon src="https://cdn.lordicon.com/wmwqvixz.json"
                                trigger="loop"
                                delay="10000"colors="primary:#ffffff"
                                style={{width:"25px", height:"25px"}}>
                            </lord-icon>
                        </div>
                    </div>
                    <div className="space-y-2 text-black flex flex-col-reverse items-center justify-center">
                        <p className="font-semibold	">Orders</p> 
                        <div>
                          <lord-icon
                                src="https://cdn.lordicon.com/dafdkyyt.json"
                                trigger="loop"
                                delay="10000"
                                style={{width:"25px", height:"25px"}}>
                            </lord-icon>
                        </div>
                    </div>
                    <div className="space-y-2 text-black  flex flex-col-reverse items-center justify-center">
                        <p className="font-semibold	">Notification</p> 
                        <div>
                            <lord-icon
                                src="https://cdn.lordicon.com/lznlxwtc.json"
                                trigger="loop"
                                delay="10000"
                                style={{width:"25px", height:"25px"}}>
                            </lord-icon>
                        </div>
                    </div>
                    <div className="space-y-2 text-black  flex flex-col-reverse items-center justify-center">
                        <p className="font-semibold	">Chat</p> 
                        <div>
                            <lord-icon
                                src="https://cdn.lordicon.com/ayhtotha.json"
                                trigger="loop"
                                delay="10000"
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