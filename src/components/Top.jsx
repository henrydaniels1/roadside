import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

function Top ()
{
    return (
        <>
            <div className="w-full">
                <div className="w-full p-4 bg-blue-900 ">
                    <div className="w-full flex justify-between items-center">
                        <div className="w-[70%]">
                            <input type="search" placeholder="Find Services" className="w-full rounded-lg p-2" />
                            
                        </div>
                        <div>
                            <lord-icon
    src="https://cdn.lordicon.com/kthelypq.json"
    trigger="hover"
    delay="2000"
    style={{width:"25px", height:"25px"}}>
                            </lord-icon>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Top