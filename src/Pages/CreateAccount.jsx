import { Link } from "react-router-dom";
import Footer from "../Components/Footer";


const CreateAccount = () => {
  return (
    <div>
        <div className="flex justify-center  bg-gray-100 min-h-screen pb-16 ">
      <div className=" mt-12 w-full mx-10 md:w-[450px]" >
        <h1 className="font-bold text-blue text-5xl text-blue-600 text-center mb-5 ">PyRa</h1>
          {/* form section  */}
        <section className="bg-white border shadow-2xl rounded-xl mb-10 ">
          <h3 className="text-2xl font-bold text-center mt-5 text-gray-800">Create a new account</h3>
          <p className="text-center">It's quick and easy.</p>
                {/* input fields  */}
        <form >
       <div className="flex flex-col  w-full p-5 border-t mt-3">
                   {/* name  */}
       <input className="py-2 pl-4 border rounded-xl mb-5 text-sm font-normal outline-slate-300" type="text" name="name" placeholder="Name"/>

              {/* date of birth and gender  */}
     <div className="flex w-full flex-row items-center gap-10">
     <div>
      <p className="mb-2 text-xs pl-2">Date of birth?</p>
      <input className="py-2 outline-none px-4 border rounded-xl mb-5 text-sm font-normal" type="date" name="date of birth" />
      </div>
    <div className=" w-full">
    <p className="mb-2 text-xs pl-2">Gender ?</p>
        <select className="py-2 outline-none px-4 border rounded-xl mb-5 text-sm font-normal w-full"  name="gender" >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
    </div>
     </div>
                           {/* email  */}
       <input className="py-2 pl-4 border rounded-xl mb-5 text-sm font-normal outline-slate-300" type="email" name="email" placeholder="Email address"/>
                           {/* password  */}
        <input className="py-2 pl-4 border rounded-xl  text-sm font-normal outline-slate-300" type="password" name="password" placeholder="Password" />
       
       </div>
      
                            {/* privacy policy details  */}
        <div className="text-xs px-5 space-y-3 mb-5">
       <p>
       People who use our service may have uploaded your contact information to Facebook. <Link target="_blank" className="text-blue-500 hover:underline" to='https://www.facebook.com/help/637205020878504'>Learn more.</Link>
       </p>
       <p>
       By clicking Sign Up, you agree to our <Link target="_blank" to='https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0' className="text-blue-500 hover:underline">Terms, Privacy Policy and Cookies Policy.</Link> You may receive SMS notifications from us and can opt out at any time.
       </p>
          </div>                    
                              {/* sign up button  */}
     <div className="w-full text-center">
     <input className="bg-[#36A420] text-white text-lg font-semibold px-16 rounded-md hover:scale-95 py-1" type="submit" value="Sign up" />
     </div>  

        </form>

                
                <div className="text-center mb-8 mt-3">
         <Link to='/' className=" text-blue-700 mb-5 text-lg hover:text-blue-400">Already have an account ?</Link> 
              </div>          
                  
                  
                      
        </section>

        

     

      </div>

               
    </div>

    <Footer></Footer>
    </div>
  );
};

export default CreateAccount;