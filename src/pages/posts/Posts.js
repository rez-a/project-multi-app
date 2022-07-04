import { Link } from "react-router-dom";
import useSWR from "swr";
import Error from "../../components/Error";
import PostSummary from "../../components/PostSummary";
import Spinner from "../../components/Spinner";
import getFetcher from "../../fetchers/getFetcher";
import './postStyle.css';

const Posts = () => {
    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', getFetcher);
    if (error) return <Error error={error} />
    if (!data) return <Spinner />
    return (
        <>  
            <h1>Posts :</h1>
            <div><Link to='./create' className="btn btn-dark">Create Post</Link></div>
            {data.map(post =>
                <PostSummary post={post} key={post.id}/>
            )}
        </>
    )
}
export default Posts;