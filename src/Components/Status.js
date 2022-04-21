import "../App.css";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import axios from "axios";
import {useState, useEffect} from "react";

function Status(){

    const user = useSelector((state)=>state.user);
    const [status,setSet] = useState([]);


    const fetchStat = ()=>{

        axios.post("http://localhost:3001/getstatus",{
            user : user
        }).then((response)=>{

            setSet(response.data);
           

        });

    }


    useEffect(()=>{


        
        fetchStat();

    });



   

    return (

        <div className="statuses">

            <div style={{justifyContent:"start"}}>

            <div className="status">


        
             <Link to="/poststat"> <div className="status-user">

                <div style={{width:"20px",height:"20px", backgroundColor:"cornflowerblue",borderRadius: "100%", float:'right', 
             color:"white", 
            alignItems:"center",
            display:"inline-flex", justifyContent:"center"}}>

                +

            </div>

                </div>

                </Link> 
                

            <p>Your Story</p>


            </div>


            {

                status.map((val,key)=>(


                    <Link to={"/status/"+val.user} style={{fontSize:"22px", textDecoration:"none", color:"black"}}><div className="status" >


                <div className="status-circle">


                <img  key={key} style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:"50px"}} src={`http://localhost:3001/fetchimg/${val.profile_pic}`}  alt={val.image}/>

                </div>

                <p>{val.user}</p>

            


            </div></Link>



                ))


            }


            


            

            

            </div>

        </div>

    );

}

export default Status;