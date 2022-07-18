import React from "react";
import Appointments from "./Appointments";
import Login from "./Login";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Home = ({isAuthenticated})=>{
    // console.log(authcheck);

    const navigate = useNavigate();
    const btnfunc = ()=>{
        if(isAuthenticated){
            navigate('/appointments');
        }
        else{
            navigate('/login');
        }
    }
    return(
        <button onClick={btnfunc}>Click Here To See Appointments</button>
    )
}

export default Home;