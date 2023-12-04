import { useState } from 'react';
import { Link } from 'react-router-dom';
// import myImage from '/public/atom.png';
// import './App.css';



function Nave() {
  const [toggle, setToggle] = useState(false)
  
  const mobile = () => {
    setToggle( !toggle )
  }

  
  return (
    <>
      <div className=" mb-10">
        <div className="flex  py-4 bg-gray-500 w-full">
          <div className="navbar flex justify-between items-center w-[85%] mx-auto">

          <div className="logo font-bold flex items-center">
             <img src="/logo3.jfif" alt="daniel" className="w-[2rem] h-[2rem]" />
             {/* <img src={myImage} alt="Description" /> */}
             <p>Ched-Vines</p>
          </div>
          
          <div className="links">
            <ul className='hidden md:flex  gap-4 items-center'>
              <li className=" p-2"><Link to="/Home">Home</Link></li>
              <li className=" p-2"><a href="">About</a></li>
              <li className=" p-2"><a href="">Services</a></li>
              <li className=" p-2"><a href="">Contact</a></li>
              <li className="border rounded-lg  p-2"><a href="">login</a></li>
              

            </ul>
          </div>

          <button className="md:hidden" onClick={mobile} id="">&#x2261;</button>

          </div>
        </div>

        { toggle && (
          <div id="mobile-menu" className="md:hidden  p-4 h-[93vh] flex flex-col space-y-8">
          <a href="#" className="block text-[#4461F2] text-xl text-center">Home</a>
          <a href="#" className="block text-[#4461F2] text-xl text-center">About</a>
          <a href="#" className="block text-[#4461F2] text-xl text-center">Services</a>
          <a href="#" className="block text-[#4461F2] text-xl text-center">Login</a>
        </div>
        )}

        
    </div>
    </>
  )
}


export default Nave;
