function StatusNav(props){

    return (



        <div className="navbar-stat">


                <div className="status">


                        <div className="status-user">
                            

                        {
                           (props.dp!=="")?<img src={`http://localhost:3001/fetchimg/${props.dp}`} width="100%" style={{borderRadius:"50px"}} height="100%"  alt={props.dp} />
                        :<></>
                        }

                        </div>


                </div>


                <p style={{color:"white"}}>{props.user}</p>

              

            

            
        </div>

    );


}
export default StatusNav;