import { Navigate} from "react-router-dom";


const PrivateRoute = ({children}) => {
 
  if(localStorage.token){
    return children;
  }

 return <Navigate to='/'></Navigate>
 
};

export default PrivateRoute;