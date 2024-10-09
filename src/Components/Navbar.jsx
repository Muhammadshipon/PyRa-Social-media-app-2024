
import { FaUserCircle } from "react-icons/fa";
import { FaShopLock } from "react-icons/fa6";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoHome, IoNotifications, IoPeopleSharp, IoSearch } from "react-icons/io5";
import { MdOndemandVideo } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";
import { TbMessageFilled } from "react-icons/tb";


const Navbar = () => {
  return (
    <nav className="bg-blue-800 py-2 px-10 shadow-lg flex  items-center justify-center lg:justify-between w-full">
    
      {/* nav start  */}
     <div className="flex w-full lg:w-3/4 lg:gap-20  gap-3  flex-col lg:flex-row ">
     <div className="flex justify-between">
            {/* logo and search input field  */}
      <div className="flex items-center flex-row ">
      <h1 className="text-white font-bold text-3xl">PyRa</h1>
      <div className="flex">
      <span className="relative left-7 top-3 text-xl text-gray-600"><IoSearch /></span>
      <input type="text" className="rounded-3xl px-8 py-2 outline-gray-500 bg-gray-50" name="search" id="" placeholder="search in PyRa..." />
      </div>
      </div>
      <span className="text-3xl text-white lg:hidden">
      <RiMenu3Line />
      </span>
      </div>

             {/* nav items */}
      <div className="flex lg:gap-20 mt-1 justify-between">
      <span className="text-gray-100 text-3xl"><IoHome /></span>  
      <span className="text-gray-100 text-3xl"><IoPeopleSharp /></span>  
      <span className="text-gray-100 text-3xl lg:hidden"><TbMessageFilled /></span>  
      <span className="text-gray-100 text-3xl lg:hidden"><IoNotifications /></span>  
      <span className="text-gray-100 text-3xl"><MdOndemandVideo /></span>  
      <span className="text-gray-100 text-3xl"><FaShopLock /></span>  


      </div>
     </div>

      {/* nav end  */}
      <div className="lg:flex w-1/4 justify-end items-center gap-5 hidden ">
  <div className="flex gap-5 ">
  <span className="text-gray-100 text-3xl"><TbMessageFilled /></span>  
  <span className="text-gray-100 text-3xl"><IoNotifications /></span>  
  </div>
  <div>
    <span className="text-5xl text-gray-300"><FaUserCircle /></span>
    <span className="absolute text-2xl text-gray-600 bg-white rounded-full top-8 right-10 "><IoMdArrowDropdownCircle /></span>
  </div>
      </div>
    </nav>
  );
};

export default Navbar;