import { useParams } from "react-router-dom";
import useSWR from "swr";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import getFetcher from "../../fetchers/getFetcher";

const User = () => {
    const { id } = useParams();
    const { data, error } = useSWR(`https://jsonplaceholder.typicode.com/users/${id}`, getFetcher);
    if (error) return <Error error={error} />
    if (!data) return <Spinner />
    return (
        <>
            <div key={data.id} className='col-6'>
                <div className="card">
                    <div className="card-header bg-primary text-white">{data.name}</div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">username : {data.username}</li>
                        <li className="list-group-item">email : {data.email}</li>
                        <li className="list-group-item">phone : {data.phone}</li>
                        <li className="list-group-item">website : {data.website}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default User;