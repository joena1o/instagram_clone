import BottomNav from "../Components/bottomNav";
import Navbar from "../Components/Navbar";
import Postgrid from "../Components/postgrid";
import Profiledet from "../Components/ProfileDet";
import {useSelector} from "react-redux";
import {useEffect, useState} from 'react';
import axios from "axios";

function Profile(){

    var user = useSelector((state)=>state.user);

    

    

    const [posts, setPost] = useState([]);


    useEffect(()=>{


        fetch();


        

    });

    const fetch = () =>{

        axios.post("http://localhost:3001/getimages",{
            user:user
        })
        .then((response)=>{

               setPost(response.data);

        });

    }

    


    


    return (

        <>

        <Navbar />        


        <div className="profile">

            <div>

            <Profiledet post={posts} />

                <div style={{paddingLeft:'12px',paddingBottom:"30px",fontSize:"14px"}}>

                <p style={{}}><b>{user}</b></p>
                <p style={{color:"grey", padding:"5px 0px"}}>Blogger</p>

                <p>React + Flutter Developer</p>

                </div>
                

                <Postgrid posts={posts} />

            

            </div>
            
            

        </div>

        <BottomNav/>

        </>


    );



}

export default Profile;