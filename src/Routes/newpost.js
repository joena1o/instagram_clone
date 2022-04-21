import Navbar from "../Components/Navbar";
import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useSelector} from "react-redux";

function NewPost(){

    const navigate = useNavigate();

    const user = useSelector((state)=>state.user);


    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const [caption, setCap] = useState("");

 
      const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
      };
 
      const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        formData.append("caption", caption);
        formData.append("user", user);

        try {
          const res = await axios.post(
            "http://localhost:3001/upload",
            formData
          ).then((response)=>{
              if(response.data === "uploaded"){
                alert("Uploaded");
                navigate("/home");
              }else{
                  alert("failed");
              }
          });
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };

    return (

        <>

        <Navbar />

        <div>New Post</div>

        <div className="newpost">

            <div className="post-form">

                <div className="image">

                </div>

                <div className="form">

                    <input type='text' onChange={(e)=>setCap(e.target.value)} placeholder="Type Caption here" />

                    <input onChange={saveFile} type='file' name='image' />

                    <button onClick={uploadFile}>Post</button>

                </div>



            </div>

        </div>

        </>

    );

}

export default NewPost;