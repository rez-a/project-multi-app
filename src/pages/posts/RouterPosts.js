import { Route, Routes } from "react-router-dom";
import CreatePost from "./CreatePost";
import EditPost from "./EditPost";
import Post from "./Post";
import Posts from "./Posts";

const RouterPosts = () =>{

    return(
        <>
            <Routes>
                <Route path="/" element={<Posts />} />
                <Route path="/create" element={<CreatePost />} />
                <Route path="/:id" element={<Post />} />
                <Route path="/:id/edit" element={<EditPost />} />
            </Routes>
        </>
    )
}
export default RouterPosts;