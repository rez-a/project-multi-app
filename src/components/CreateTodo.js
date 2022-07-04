import { useContext } from "react";
import { useState } from "react";
import TodoContext from "../todoReducer/todoContext/todoContext";
import Loading from "./Loading";

const CreateTodo = () => {
    const {createTodos} = useContext(TodoContext);
    const [loading , setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const handleCreateTodo = async(e) =>{
        setLoading(true);
        e.preventDefault();
        const form = new FormData(e.target);
        await createTodos(form.get('title'));
        setLoading(false);
        setTitle("");
    }
    return (
        <>
            <h1>Create Todo :</h1>
            <form onSubmit={handleCreateTodo} className="col-6 d-flex align-items-start">
                <div className="mb-2 w-75">
                    <input value={title} type="text" name="title" className="form-control" placeholder="Todo Title..." id="title" onChange={(e) => e.target.value.trim() !== "" ? setTitle(e.target.value) : setTitle("")} />
                    <small className={title ? "opacity-0" : "text-danger"} >Title is required</small>
                </div>
                <button type="submit" className="btn btn-dark ms-2" disabled={title ? false : true}>Create {loading && <Loading />}</button>
            </form>
            <hr />
        </>
    )
}
export default CreateTodo;