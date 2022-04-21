import saveicon from '../assets/saveicon.png';
import shareicon from '../assets/shareicon.png';
import comment from '../assets/comment.png';
import hearticon from "../assets/hearticon.png";
import '../App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import CommentBox from './commentbox';

function Feed(props){

    const post = props.post;

    const [likes, setLike] = useState(0);

    const [comm, setCom] = useState(false);

    const [comments, setComments] = useState([]);


    const com = (val) => {

        setCom(val)

    }

    useEffect(()=>{

        fetchCom(post.id);

    });

    const user = useSelector((state)=>state.user);


    const fetchCom = async(id)=>{


        await axios.post("http://localhost:3001/fetchcomm",{
            postid: id
        }).then((response)=> {


                    setComments(response.data);
                    
                   
            

        })


    }

    const like = async() => {

      

        await axios.post("http://localhost:3001/like",
        {
            user: user,
            post_id: post.id
        }).then((response)=>{

            

            if(response.data === "liked"){

                setLike(likes + 1);

            }else if(response.data === "disliked"){

                setLike(likes - 1);

            }

        });

    }


    return (

        <div className="feed">

            <div className="feed_nav">

                <div className='feed-profile'>

                    <div className='profile-img'>


                    <img src={`http://localhost:3001/fetchimg/${post.profile_pic}`}  
                    style={{width:"100%",height:"100%", borderRadius:"50px"}}
                    alt={post.profile_pic} />

                        

                    </div>

                    <div className='profile-name'>
                        <p>{post.user}</p>
                    </div>

                </div>


                <div className='feed-options'>
                    
                    :
                </div>

            </div>

            <div className="feed-img">

                <img src={`http://localhost:3001/fetchimg/${post.image}`}  alt={post.image} />

            </div>

            <div className="feed-bottom">

                <div className="feed-res">

                    <div className='like'>
                        <img src={hearticon} onClick={like}/>
                    </div>

                    <div className='comment'>
                        <img src={comment} onClick={() => com(!comm)}/>
                    </div>

                    <div className='share'>
                        <img  src={shareicon} />
                    </div>

                </div>


                <div className="feed-save">
                    
                    <img src={saveicon}/>

                </div>

            </div>

            <div className='caption'>

                <p>{post.likes} likes</p>

                <p>{post.caption}</p>
            </div>


            <div className='comments'>

                {(comments.length>0)?<p style={{fontSize:"14px",padding:"10px 0px"}}>{comments.length} Comments</p>
                    :<></>    
            }

                {


                       

                        comments.map((val,key)=>(


                         
                                <div className="comment-box" key={key}>

                                <img src={`http://localhost:3001/fetchimg/${val.profile_pic}`} 
                                style={{objectFit:"cover",borderRadius:"50px"}}
                                alt={post.image} />

                                <div>

                                    <div>{val.user}</div>

                                    <div style={{color:"grey"}}>{val.comment}</div>

                                </div>



                                </div>
                      
                           


                        ))

                        

                }


                



            </div>
            
           

                    <CommentBox postid={post.id} />

           

            


            


        </div>

    );

}

export default Feed;