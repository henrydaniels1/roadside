const Profile = () =>
{
    return (
        <div className="flex  justify-end ">
        <div id="dropdownAvatar" className="z-10  bg-gray-600 opacity-90 text-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600">
       
            <div className="px-4 py-3 text-sm text-white dark:text-white">
              <div>Henry-daniel</div>
              <div className="font-medium truncate">henrydaniel@gmail.com</div>
            </div>
            <ul className="py-2 text-sm text-white dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
              </li>
            </ul>
            <div className="py-2">
              <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
            </div>
            
        </div>    
        </div>
    )
    
}

export default Profile