function Postgrid(props){

    const posts = props.posts;

    return (

        <div className="postgrid">


                {
                     posts.map((val, key)=>(

                        <div className="grid-item" key={val.id}>
                            <img key={val.id} style={{width:"100%", height:"100%", objectFit:"cover"}} src={`http://localhost:3001/fetchimg/${val.image}`}  alt={val.image}/>
                        </div>
                           
                       ))

                }
          

            

            
            

        </div>

    )

}
export default Postgrid;