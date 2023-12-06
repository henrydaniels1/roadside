import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
// import img from '/img1.png'
// import {useState} from "react"

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);




function Top ()
{
  // const [ toggle, setToggle ] = useState( false );
  return (
      

      <>
        
            <div className="w-full fixed top-0 left-0">
                <div className="w-full p-4 bg-[#7673E5] ">
                    <div className="w-full flex justify-between items-center">
                        <div className="w-[86%]">
                            <input type="search" placeholder="Find Services" className="w-full rounded-lg py-2 px-4" />
                            
            </div>
            
            <div>
              
{/*                             
<button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
<span className="sr-only">Open user menu</span>
<img className="w-8 h-8 rounded-full" src={img} alt="user photo"/>
</button>

<div id="dropdownAvatar" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>Henry-daniel</div>
      <div className="font-medium truncate">henrydaniel@gmail.com</div>
    </div>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div className="py-2">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
    </div>
</div> */}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Top