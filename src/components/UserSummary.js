import { Link } from "react-router-dom";

const UserSummary = ({ user }) => {
    return (
        <>
            <div className='col-4'>
                <div className="card">
                    <div className="card-header">
                        <Link to={`./${user.id}`}>{user.name}</Link>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">username : {user.username}</li>
                        <li className="list-group-item">email : {user.email}</li>
                        <li className="list-group-item">phone : {user.phone}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default UserSummary;