import { Route, Routes } from "react-router-dom";
import User from "./User";
import Users from "./Users";

const RouterUsers = () =>{
    return (
        <>
            <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/:id" element={<User />} />
            </Routes>
        </>
    )
}
export default RouterUsers;