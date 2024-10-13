import { Outlet} from "react-router-dom";
import Navbar from "../../Components/Navbar";
import getLoginUserEmail from "../../utilities/getLoginUserEmail";
import RightSection from "./RightSection/RightSection";


const Home = () => {

  const {email} = getLoginUserEmail();
  console.log(email);
  return (
    <div>
        {/* navbar section  */}
      <Navbar></Navbar>
         {/* main section  */}
    <section className="w-full min-h-screen flex pt-[64px]">
            {/* left side section  */}
      <aside className="w-1/4 bg-gray-300">
      <p>left side section</p>
      </aside>
               {/* middle side section  */}
      <main className="w-2/4">
      <Outlet></Outlet>
      </main>
              {/* Right side section */}
      <aside className="w-1/4 bg-gray-300 ">
      <p><RightSection></RightSection></p>
      
      </aside>
    
    </section>
     
    </div>
  );
};

export default Home;