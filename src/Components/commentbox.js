import axios from "axios";
import {useState} from "react";
import { useSelector } from "react-redux";


export default function CommentBox(props){

    const user = useSelector((state)=> state.user);

    const [comment, setComment] = useState("");

    const postid = props.postid.toString();



    const postCo = ()=>{

        axios.post("http://localhost:3001/comment", {

            user : user,
            post_id: postid,
            comment: comment

        }).then((response)=>{

            if(response.data == "commented"){
                alert("Comment Submitted");

                setComment("");

            }else{
                console.log(response.data);
            }

        });

    }

     

    return(

        <div className="commentBox">

            <div className="commentbox_inner">

                <input onChange={(e)=>setComment(e.target.value)} value={comment} type="text" name='comment' placeholder='Type your comment here' />

                <button onClick={postCo}>Send</button>


            </div>

        </div>


    );


}