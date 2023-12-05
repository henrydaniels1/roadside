import mech from '/mechanic.png'
function Container1 ()
{
    return (
        <>
            <div className="w-full">
                <div className="w-full mx-auto  flex justify-between items-center">

                    <div className="w-[48%] rounded-lg  py-4 bg-purple-500 flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center"><img src={ mech }></img></div>
                        <div className="text-white">Mechanics</div>
                    </div>    
                   <div className="w-[48%] rounded-lg  py-4 bg-purple-500 flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center"><img src={ mech }></img></div>
                        <div className="text-white">Mechanics</div>
                    </div>    
                       
                    
                </div>
            </div>
        
        </>
    ) 

   
}


export default Container1