import {useEffect, useState} from 'react';
import axios from 'axios';
import StatusNav from '../Components/StatusNav';
import {useParams} from "react-router-dom";
import {useNavigate}  from 'react-router-dom';

function StatusView(props){


    const navigate = useNavigate();

    const [status, setSt] = useState([]);

    const [index, setIndex] = useState(0);

    const user = useParams();
    
    const [dp, setDp] = useState("");

    const fetch = async()=> {

        await axios.post("http://localhost:3001/usersstatus",
        {
            user: user.user
        }
        ).then((response)=>{

              
                setSt(response.data);

                setDp(status[0].profile_pic);
                

        });

    }


    useEffect(()=>{

        fetch();
        

    })

  

    const increment = ()=>{

        if(index < status.length-1){

           setIndex(index + 1);

            // console.log(index);

        }else{

                navigate("/home");

        }

    }


    const desc = ()=>{

        if(index >  0 && index <= status.length){

           setIndex(index - 1);

            // console.log(index);

        }

    }





    return(



       

<div style={{backgroundColor: "black",width:"100%", height:"100vh", display:"inline-flex", justifyContent:"center"}}>


    <StatusNav user={user.user} dp={(dp!=="")?dp:""} />

    

   
    <div style={{width:"100%",display:"inline-flex", justifyContent:"start",alignItems:"center", overflow:"hidden"}}>


                <div className='prev' onClick={desc}> 
                    {
                        "<"
                    }
                </div>

            
    

               {

                  
                status.map((val,key)=>(


                   (status.indexOf(val) === index ) ?<div className="statusItem" style={{width:"100%", height:"50vh"}}>

                    
                    {

                 <img   style={{width:"100vw", height:"100%", objectFit:"scale-down", borderRadius:"10px"}} src={`http://localhost:3001/fetchimg/${val.image}`} alt="ima" />
                        
                    }    

                     </div>: <></>




                ))


                    





                // ))

               }


               <div className='next' onClick={increment}>

                   {
                       ">"
                   }

               </div>

            



        </div>

        

        </div>

    )


}


export default StatusView