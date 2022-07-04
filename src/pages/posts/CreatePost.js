import axios from "axios";
import { useState } from "react";
import Loading  from "../../components/Loading";
import successAlert from "../../utilities/successAlert";

const CreatePost = () => {
    const [title , setTitle] = useState('');
    const [body , setBody] = useState('');
    const [loading , setLoading] = useState(false);
    const handleCreatePost = async() =>{
        setLoading(true)
       const res = await axios.post('https://jsonplaceholder.typicode.com/posts' , {title , body , userId : 1});
       if(res.status===201){
        setLoading(false)
       successAlert('Post added successfully');
       setTitle('');
       setBody('');
       }
    }
    return (
        <>
            <div className="col-6">
                <h1 className="mb-4">Create Post :</h1>
                <div className="mb-4">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title ? title : ""} className="form-control" id="title" onChange={(e) => e.target.value.trim() !=="" ? setTitle(e.target.value) : setTitle("")}/>
                    <small className={title ? "opacity-0" : "text-danger"} >Title is required</small>
                </div>
                <div className="mb-4">
                    <label htmlFor="body" className="form-label">Body</label>
                    <textarea value={body ? body : ""} className="form-control" id="body" rows="6" onChange={(e) => e.target.value.trim() !=="" ? setBody(e.target.value) : setBody("")}></textarea>
                    <small className={body ? "opacity-0" : "text-danger"}>Body is required</small>
                </div>
                <button className="btn btn-dark" onClick={handleCreatePost} disabled={body && title ? false : true}>Create {loading && <Loading />}</button>
            </div>
        </>
    )
}
export default CreatePost;