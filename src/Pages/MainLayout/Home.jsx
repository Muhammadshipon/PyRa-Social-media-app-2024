import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      Welcome! To PyRa....
      <button className="btn m-auto" onClick={()=>{localStorage.removeItem('token');
            navigate('/');
      }}>Logout</button>
    </div>
  );
};

export default Home;