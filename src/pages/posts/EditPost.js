import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Spinner from "../../components/Spinner";
import successAlert from "../../utilities/successAlert";
import unSuccessAlert from "../../utilities/unSuccessAlert";

const EditPost = () => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [btnLoading , setBtnLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true);
        (async function getData() {
            try {
                const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
                if (res.status === 200) {
                    const data = res.data;
                    setPost(data);
                    setTitle(data.title);
                    setBody(data.body);
                    setError(null);
                    setLoading(false);
                }
            } catch (err) {
                setPost(null);
                setTitle("");
                setBody("");
                setError(err.message);
                setLoading(false);
            }
        })()
    }, [id]);
    const handleUpdatePost = async () => {
            setBtnLoading(true);
            const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, { title, body });
            res.status === 200 ? successAlert('The post has been successfully updated') : unSuccessAlert('Something went wrong');
            setBtnLoading(false);
            navigate(`/posts/${id}`);
        }
    return (
        <>
            {error && <Error error={error} />}
            {loading && <Spinner />}
            {post && <div className="col-6">
                <h1 className="mb-4">Edit Post :</h1>
                <div className="mb-4">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title ? title : ""} className="form-control" id="title" onChange={(e) => e.target.value.trim() !== "" ? setTitle(e.target.value) : setTitle("")} />
                    <small className={title ? "opacity-0" : "text-danger"} >Title is required</small>
                </div>
                <div className="mb-4">
                    <label htmlFor="body" className="form-label">Body</label>
                    <textarea value={body ? body : ""} className="form-control" id="body" rows="6" onChange={(e) => e.target.value.trim() !== "" ? setBody(e.target.value) : setBody("")}></textarea>
                    <small className={body ? "opacity-0" : "text-danger"}>Body is required</small>
                </div>
                <button onClick={handleUpdatePost} className="btn btn-dark" disabled={body && title ? false : true}>Update {btnLoading && <Loading />}</button>
                <Link to={`/posts/${id}`} className='btn btn-warning ms-2'>Cancel</Link>
            </div>}
        </>
    )


}
export default EditPost;