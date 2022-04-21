import BottomNav from "../Components/bottomNav";
import Navbar from "../Components/Navbar";
import axios from "axios";
import {useState, useEffect} from 'react';

function Search(){


    const [searchRes, setSearch] = useState([]);


    useEffect(()=>{

        fetch();

    });


    const fetch = (val)=>{


       

        axios.post("http://localhost:3001/search",{
            search : val
        }).then((response)=>{


            setSearch(response.data);


        });


    }


    return (

        <>
            <Navbar/>


                <div className="search">


                    <div className="search_inner">

                    <div>


                        <input type="text" value={searchRes} placeholder="Search here..." onChange={(e) => {
        
                                fetch(e.target.value);
                        }}   />

                        
                        <div style={{height:"80vh", width:"86vw"}}>


                        </div>


                    
                    </div>    

                    </div>


                </div>


                <div className="search_view">


                    {/* {
                        searchRes.map((val,key)=>(

                            <h1>{val.user}</h1>

                        ))
                    } */}



                </div>

            <BottomNav/>
        </>

    );


}

export default Search;