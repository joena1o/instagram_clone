import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


function Profiledet(props){

    const post = props.post;

    var profile = useSelector((state)=>state.profile);

    

    return (

        <div className="profile_details">


                <div style={{textAlign:"start", fontSize:'14px', padding:'0px 30px'}}>

                
                
                <Link to="/dp"><div className="status-user"  >
                
                <img src={`http://localhost:3001/fetchimg/${profile}`}  alt={profile} style={{objectFit:"cover"
            ,width:"100%", height:"100%", borderRadius:"30px"}} />

                
                </div>
                </Link>

               

                </div>

                <div className="account_details">
                    <p>0</p>
                    <p>Post</p>
                </div>

                <div>
                    <p>0</p>
                    <p>Followers</p>
                </div>

                <div>
                    <p>0</p>
                    <p>Following</p>
                </div>

            </div>

    );

}

export default Profiledet;