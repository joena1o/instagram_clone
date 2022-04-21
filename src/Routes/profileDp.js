import Navbar from "../Components/Navbar";
import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useSelector} from "react-redux";

function ProfileDP(){

    const navigate = useNavigate();

    const user = useSelector((state)=>state.user);


    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    
 
      const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
      };
 
      const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        formData.append("user", user);

        try {
          const res = await axios.post(
            "http://localhost:3001/uploaddp",
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

        <div>Profile Picture</div>

        <div className="newpost">

            <div className="post-form">

                <div className="image">

                </div>

                <div className="form">

                    <input onChange={saveFile} type='file' name='image' />

                    <button onClick={uploadFile}>Upload</button>

                </div>



            </div>

        </div>

        </>

    );

}

export default ProfileDP;