import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';



function Login(props){

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const navigate =useNavigate();

    const dispatch = useDispatch();

    var user = useSelector((state)=>state.user);

    var profile = useSelector((state)=>state.profile);

    const setUser = (newUser, nprofile)=>{
      dispatch({
        type: "USER", payload: {user: newUser, profile: nprofile},
        
      })

     
    };   

    const setDp = (dp) =>{

        dispatch({

            type: "DP", payload: dp

        });

    }

    const Login = ()=>{

        axios.post("http://localhost:3001/login", {
            email : email,
            pass: pass
        }).then((response)=>{
            if(response.data !== "Failed" || response.data !== "invalid"){
                alert("Login Successful")

                const da = response.data;

               

                setUser(da[0],da[1]);
// setDp(da[1]);

                

                // setDp(da[1]);

                
                navigate("/home");
            }else if(response.data !== "Invalid"){
                alert("Invalid login details")
            }else{
                alert("Connection Failed")
            }
        });

    }

    return(

        <div className="login">

            <div className="form">

                <input value={email} onChange={(e)=>setEmail(e.target.value)} type='text' placeholder="email"/>

                <input value={pass} onChange={(e)=>setPass(e.target.value)} type='password' placeholder="password"/>

                <button onClick={Login}>Login</button>

                <div onClick={()=>props.change(true)}>Register new account</div>


                
            </div>


        </div>

    );

}

export default Login;