import home from "../assets/home.png";
import searchicon from "../assets/searchicon.png"
import reelicon from "../assets/reelicon.png"
import hearticon from "../assets/hearticon.png"
import '../App.css'
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";




function BottomNav(){

    var profile = useSelector((state)=>state.profile);


    return (

        <div className="bottomNav">

            <div className="nav">

            <Link to='/home'><img src={home} /></Link>

            </div>

             <div className="nav">

             <Link to='/search'><img src={searchicon} /></Link>

            </div>

            <div className="nav">

                <img src={reelicon} />

            </div>

            <div className="nav">

            <img src={hearticon} />

            </div>


            

            <Link to='/profile'><div className='bottom-img'>

            <img src={`http://localhost:3001/fetchimg/${profile}`}  alt={profile} style={{objectFit:"cover"
            ,width:"100%", height:"100%", borderRadius:"50px"}} />

                    </div>
                    </Link>

            

        </div>

    )

}

export default BottomNav;