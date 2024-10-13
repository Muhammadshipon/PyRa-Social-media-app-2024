import { FaFileExport, FaUserCircle } from "react-icons/fa";
// import getLoginUserEmail from "../utilities/getLoginUserEmail";
import useUser from "../hooks/useUser";
import { ImProfile } from "react-icons/im";
import { IoSettingsSharp } from "react-icons/io5";
import { MdDarkMode, MdFeedback, MdLiveHelp } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";


const MenuItemForProfile = () => {
  const navigate = useNavigate();
  const {user} = useUser();
  console.log('user from right section ',user);

  return (
    <div className="p-2">
    {/* profile  */}
 <Link to={`/home/profile/${user?.email}`}>
 <div className="bg-white p-4 rounded-lg shadow-lg active:scale-95">
   <div className="flex flex-row items-center gap-2 pb-2 border-b-2">
    <span  className="text-5xl text-gray-500 active:scale-95"><FaUserCircle /></span>
    <p className="font-semibold text-xl">
     {user?.name}
    </p>
    </div>
   
    <button className="btn w-full mt-3 bg-green-600 text-white hover:bg-green-800"><ImProfile className="text-xl" />View Your Profile</button>
   </div>
 </Link>
      
          {/* Profile related item lists  */}
   <div className="flex flex-col gap-1 mt-2">
         {/* settings  */}
         <div className="flex active:scale-95 items-center gap-2 bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-100">
          <span className="text-2xl"><IoSettingsSharp /></span><p className="text-lg font-semibold ">Settings</p>
         </div>
         {/* Help and Support  */}
         <div className="flex active:scale-95 items-center gap-2 bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-100">
          <span className="text-2xl"><MdLiveHelp /></span><p className="text-lg font-semibold ">Help and Support</p>
         </div>
         {/* Display  */}
         <div className="flex active:scale-95 items-center gap-2 bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-100">
          <span className="text-2xl"><MdDarkMode /></span><p className="text-lg font-semibold ">Display</p>
         </div>
         {/* Feedback  */}
         <div className="flex active:scale-95 items-center gap-2 bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-100">
          <span className="text-2xl"><MdFeedback /></span><p className="text-lg font-semibold ">Feedback</p>
         </div>
         {/* Log Out  */}
         <div onClick={()=>{localStorage.removeItem('token');
      localStorage.removeItem('email');
            navigate('/');
      }} className="flex items-center gap-2 active:scale-95 bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-100">
          <span className="text-2xl text-red-600"><FaFileExport /></span><p className="text-lg font-semibold text-red-600">Log Out</p>
         </div>
   </div>
    </div>
  
  );
};

export default MenuItemForProfile;