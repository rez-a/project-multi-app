import axios from "axios";
import {  Link, useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import getFetcher from "../../fetchers/getFetcher";
import successAlert from "../../utilities/successAlert";
import unSuccessAlert from "../../utilities/unSuccessAlert";

const Post = () => {
    const handleDeletePost = async() =>{
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        res.status === 200 ? successAlert('The post has been successfully deleted') : unSuccessAlert('Something went wrong!');
        navigate('/posts');
    }
    const { id } = useParams();
    const { data, error } = useSWR(`https://jsonplaceholder.typicode.com/posts/${id}` , getFetcher);
    const navigate = useNavigate();
    if (error) return <Error />
    if (!data) return <Spinner />
    return (
        <>
            <div className='col-6'>
                <div className="card">
                    <div className="card-header bg-primary text-white">{data.title}</div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{data.body}</li>
                        <li className="list-group-item">
                            <button onClick={handleDeletePost} className="btn btn-danger">delete</button>
                            <Link to='./edit' className="btn btn-dark ms-2">edit</Link>
                            </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Post;