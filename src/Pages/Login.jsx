import { Link } from "react-router-dom";
import Footer from "../Components/Footer";


const Login = () => {
  return (
    <div>
      <div className="flex justify-center  bg-gray-100 min-h-screen pb-16 ">
      <div className=" mt-12 w-full mx-10 md:w-[400px]" >
        <h1 className="font-bold text-blue text-5xl text-blue-600 text-center mb-5 ">PyRa</h1>
          {/* form section  */}
        <section className="bg-white border shadow-2xl rounded-xl mb-10 ">
          <h3 className="text-xl text-center mt-5 text-gray-800 font-semibold">Log in to PyRa</h3>
                {/* input fields  */}
        <form >
       <div className="flex flex-col  w-full p-5">
       <input className="p-3 border rounded-xl mb-5 text-xl font-normal outline-slate-200" type="email" name="email" id="" placeholder="Email address"/>
        <input className="p-3 border rounded-xl mb-5 text-xl font-normal outline-slate-200" type="password" name="password" id="" placeholder="Password" />
        <input className="bg-[#166FE5] text-white text-xl font-semibold p-3 rounded-xl hover:scale-95" type="submit" value="Log in" />
       </div>
        </form>

                 {/* Forgotten and create new account section  */}
                <div>
         <p className="text-center text-blue-700 mb-5 ">Forgotten account ?</p> 
        
         <div className="flex flex-row px-5">
         <div className="border-t  border-gray-300 my-4 w-full"></div>
            <span className="px-4">or</span>
            <div className="border-t  border-gray-300 my-4 w-full"></div>
         </div>

         <div className="w-full text-center mt-5 mb-10 hover:scale-95">
         <Link to='/create-account' className=" text-white bg-[#36A420] px-5 py-3 rounded-lg text-xl font-semibold ">Create new account</Link>
         </div>

              </div>          
                  
                  
                      
        </section>

        

     

      </div>

               
    </div>

    <Footer></Footer>
    </div>
  );
};

export default Login;