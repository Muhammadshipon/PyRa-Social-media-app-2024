import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";


const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar></Navbar>
      Welcome! To PyRa....
      <button className="btn m-auto" onClick={()=>{localStorage.removeItem('token');
            navigate('/');
      }}>Logout</button>
    </div>
  );
};

export default Home;