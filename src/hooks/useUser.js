import axios from "axios";
import { useEffect, useState } from "react";
import getLoginUserEmail from "../utilities/getLoginUserEmail";


const useUser = () => {
  const [user,setUser] = useState({});
  const {email} = getLoginUserEmail();
  useEffect(()=>{
    const getUser = async()=>{
      const result =await axios.get(`http://localhost:5000/user/${email}`);
       console.log(result);
       setUser(result.data.user);
    }
  getUser();
  },[email])
  return {user};
};

export default useUser;