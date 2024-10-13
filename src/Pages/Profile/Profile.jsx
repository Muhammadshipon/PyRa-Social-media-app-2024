import { MdPhotoCamera } from "react-icons/md";
import { useParams } from "react-router-dom";



const Profile = () => {
  const {email} = useParams();
  console.log('email from profile',email);
  return (
    <div className="px-2">
         {/* cover photo section */}
    <section className="w-full h-[240px]  ">
    <img src="https://www.pics4learning.com/images/pics-banner1-1300.jpg" alt="cover photo" className="w-full h-full rounded-b-lg border-sky-500 border-2 border-t-0" />
     <div className="flex active:scale-95 flex-row items-center px-1 rounded-3xl  w-[170px] bg-[rgb(0,0,0,0.4)] hover:bg-[rgb(0,0,0,0.6)] item-center gap-1 relative bottom-10 left-[420px]">
      <span className="text-xl text-gray-200"><MdPhotoCamera /></span>
      <p className="text-white text-lg">Edit cover photo</p>
     </div>
    </section>
      {/* profile photo section  */}
    <div className="w-[200px] h-[200px] rounded-full border-4 border-blue-500 relative bottom-24 left-[35%]">
      <img src="https://h5p.open.ubc.ca/wp-content/uploads/h5p/content/24/images/file-6113d5f8845dc.jpeg" alt=" profile photo" className="w-full h-full rounded-full"/>
      <div className="text-3xl relative bottom-10 left-[75%] bg-slate-100 w-10 h-10 flex justify-center items-center rounded-full border border-gray-400 active:scale-95"><MdPhotoCamera /></div>
      </div>  
    
    </div>
  );
};

export default Profile;