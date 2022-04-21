import "../App.css"
import Feed from "./feed";
import Status from './Status';

function Feeds(props){

    const posts = props.data;

    return(

        <div className="feeds">

            <Status />

            {
                posts.map((val,key)=>(
                   <Feed key={key}  post={val} />
                ))
            }


        </div>

    );

}

export default Feeds;