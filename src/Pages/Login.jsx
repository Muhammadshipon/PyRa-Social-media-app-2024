import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { useState } from "react";
import axios from "axios";
import setAuthToken from "../utilities/setAuthToken";


if(localStorage.token){
  setAuthToken(localStorage.token);
  console.log(localStorage.token);
}

const Login = () => {
  const navigate = useNavigate();
  const [invalidText,setInvalidText] = useState(false);
  const [formData, setFormData] = useState({email:'',password:''
  })
  const handleChange =(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
 const res = await axios.post('http://localhost:5000/auth/login', formData)
 console.log(res.data);
      // store the token in the localStorage 
      localStorage.setItem('token',res.data.token);
      navigate('/home')
    }catch(err){
      console.log(err.response.data.msg);
      if(err.response.data.msg==='Invalid Credentials'){
        setInvalidText(true);
      }
      
    }
  }
  console.log(formData);
  return (
    <div>
      <div className="flex justify-center  bg-gray-100 min-h-screen pb-16 ">
      <div className=" mt-12 w-full mx-10 md:w-[400px]" >
        <h1 className="font-bold text-blue text-5xl text-blue-600 text-center mb-5 ">PyRa</h1>
          {/* form section  */}
        <section className="bg-white border shadow-2xl rounded-xl mb-10 ">
          <h3 className="text-xl text-center mt-5 text-gray-800 font-semibold">Log in to PyRa</h3>
                {/* input fields  */}
        <form onSubmit={handleSubmit} >
       <div className="flex flex-col  w-full p-5">
       <input required value={formData.email} onChange={handleChange} className="p-3 border rounded-xl mb-5 text-xl font-normal outline-slate-200" type="email" name="email" id="" placeholder="Email address"/>
        <input required value={formData.password} onChange={handleChange} className="p-3 border rounded-xl  text-xl font-normal outline-slate-200" type="password" name="password" id="" placeholder="Password" />
        {invalidText?<p className="text-red-500 ml-4">wrong email or password! please try again.</p>:''}
        <input className="bg-[#166FE5] text-white text-xl font-semibold p-3 rounded-xl hover:scale-95 mt-5" type="submit" value="Log in" />
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