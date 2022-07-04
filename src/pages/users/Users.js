import getFetcher from '../../fetchers/getFetcher';
import useSWR from 'swr';
import Error from '../../components/Error';
import Spinner from '../../components/Spinner';
import UserSummary from '../../components/UserSummary';

const Users = () => {
    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/users', getFetcher);
    if (error) return <Error error={error} />
    if (!data) return <Spinner />
    return (
        <>
            <h1>Users :</h1>
            {data.map(user => <UserSummary user={user} key={user.id}/>)}
        </>
    )

}
export default Users;