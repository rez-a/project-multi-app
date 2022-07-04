import { useState } from "react";
import { useContext } from "react";
import TodoContext from "../todoReducer/todoContext/todoContext";
import Loading from "./Loading";

const DeleteTodo = ({ todo }) => {
    const { deleteTodos } = useContext(TodoContext);
    const [loading, setLoading] = useState(false);
    const handleDeleteTodo = async () => {
        setLoading(true);
        await deleteTodos(todo.id);
        setLoading(false);
    }
    return (
        <>
            <i onClick={handleDeleteTodo} className="bi bi-trash3-fill ms-2"></i>
            {loading && <Loading />}
        </>
    )
}
export default DeleteTodo;