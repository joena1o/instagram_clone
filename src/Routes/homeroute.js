import Navbar from '../Components/Navbar';
import BottomNav from '../Components/bottomNav';
import Feeds from '../Components/Feeds.js';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';


function HomeRoute(props) {

    

    const user = useSelector((state)=>state.user)


    const [data, changeData] = useState([]);
    const [userdetails, setUser] = useState([]);

    useEffect(()=>{

        Fetch();
    
    
      });

      const Fetch = async()=> {

       await axios.post("http://localhost:3001/fetch",{
            user: 'balami_hyef'
        }).then((response)=>{

            changeData(response.data);
          
        })



      }

      const FetchUser = async()=> {

        await axios.post("http://localhost:3001/fetchuser",{
            user: 'balami_hyef'
        }).then((response)=>{

            setUser(response.data);
          
        })



      }


    return(

        <>

            <Navbar />

            <Feeds data={data} />

            <BottomNav />

        </>

    );

}

export default HomeRoute;