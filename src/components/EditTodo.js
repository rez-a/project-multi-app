import { useContext, useState } from "react";
import TodoContext from "../todoReducer/todoContext/todoContext";
import Loading from "./Loading";

const EditTodo = ({ todo }) => {
    const { editTodos } = useContext(TodoContext);
    const [loading, setLoading] = useState(false);
    const handleEditTodo = async () => {
        setLoading(true);
        await editTodos(todo);
        setLoading(false);
    }
    return (
        <>
            <div onClick={handleEditTodo}>
                {todo.completed ? <i className="bi bi-check-all fs-4"></i> : <i className="bi bi-check fs-4"></i>}
                {loading && <Loading />}
            </div>
        </>
    )
}
export default EditTodo;