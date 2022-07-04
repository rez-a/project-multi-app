import { Link } from "react-router-dom";

const PostSummary = ({ post }) => {
    return (
        <>
            <div className='col-4'>
                <div className="card">
                    <div className="card-header">
                        <Link className="post-title" to={`./${post.id}`}>{post.title}</Link>
                    </div>
                    <div className="card-body">
                        <p className="post-body">{post.body}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PostSummary;