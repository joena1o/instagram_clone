import instaicon from "../assets/instaicon.png"
import shareicon from "../assets/shareicon.png"
import add from "../assets/add.png"
import '../App.css';
import {Link} from "react-router-dom";


function Navbar(){

    return (

        <div className="navbar">
            <Link  style={{textDecoration:'none'}} to='/home'><div className="brand">   
            <img src={instaicon} />
            <span><b style={{fontSize:"22px", textDecoration:"none", color:"black"}}>Instagram</b></span>
            </div>
            </Link>

            <div className="side-icons">

                <div>
                    <Link to='/post'><img src={add} /></Link>
                </div>

                <div>
                    <img src={shareicon} />
                </div>


            </div>

        </div>

    )

}

export default Navbar;
