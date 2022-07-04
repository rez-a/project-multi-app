import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <h3>Multi App</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sunt quidem labore natus ipsa nostrum ipsam! Sequi consectetur, sint at nihil incidunt tempora quae, repellat, magnam quia hic repellendus provident!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sunt quidem labore natus ipsa nostrum ipsam! Sequi consectetur, sint at nihil incidunt tempora quae, repellat, magnam quia hic repellendus provident!</p>
            <div>
                <Link to='/users' className='btn btn-dark' >Users</Link>
                <Link to='/posts' className='btn btn-light ms-3' >Posts</Link>
            </div>
        </>
    )
}
export default Home