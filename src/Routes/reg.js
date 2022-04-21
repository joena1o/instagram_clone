import Axios from 'axios';
import {useState} from 'react';

function Reg(props){


    const [name, setName] = useState("");
    const [username, setUser] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");


    const reg = () => {

        Axios.post("http://localhost:3001/reg", {
            name: name,
            surname: surname,
            email : email,
            username : username,
            password : password
        }).then((response)=>{
            if(response.data === "Success"){
                props.change(false);
                alert("Registered");

                setEmail("")
                setName("")
                setPass("")
                setSurname("")

            }else{
                alert("Registered")
            }
        })

        

        
       

    }


    return (

        <div className="login">

            <div className="form">

                <input value={name} onChange={(e)=>setName(e.target.value)} type='text' placeholder="First name"/>

                <input value={surname} onChange={(e)=>setSurname(e.target.value)} type='text' placeholder="Surname"/>

                <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder="email"/>


                <input value={username} onChange={(e)=>setUser(e.target.value)} type='text' placeholder="username"/>


                <input value={password} onChange={(e)=>setPass(e.target.value)} type='password' placeholder="password"/>



                <button onClick={reg}>Register</button>

                <div onClick={()=>props.change(false)}>Login</div>


                
            </div>

            </div>


    );

}

export default Reg;