import Navbar from "../Components/Navbar";
import {useState} from "react";
import Login from "./Login";
import Reg from "./reg";

function Auth(prop){


    const[reg,setAuth] = useState(true);



    return (

        <div className="auth">

        <Navbar/>
                
                {
                    (reg)?<Reg change={setAuth} />:<Login  change={setAuth}/>
                }
        

        </div>

    );

}

export default Auth;