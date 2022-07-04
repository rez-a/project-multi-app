import { useState } from "react";
import { useContext } from "react";
import TodoContext from "../todoReducer/todoContext/todoContext";
import Loading from "./Loading";

const FilterTodo = () => {
    const [loading , setLoading] = useState(false);
    const { filterTodos } = useContext(TodoContext);
    const handleFilterTodo = async (e) => {
        setLoading(true);
        let filter;
        switch (e.target.value) {
            case 'completed':
                filter = true;
                break;
            case 'uncompleted':
                filter = false;
                break;
            case '50':
                filter = 50;
                break;
            case '100':
                filter = 100;
                break;
            case '100':
                filter = 100;
                break;
            default:
                filter = 200;
                break;
        }
        await filterTodos(filter);
        setLoading(false);

    }

    return (
        <>
            <div className="col-12 d-flex align-items-center">
                <select onChange={handleFilterTodo} className="form-select w-25 me-3" aria-label="Default select example">
                    <option defaultValue='all'>all</option>
                    <option value="completed">completed</option>
                    <option value="uncompleted">uncompleted</option>
                    <option value="50">50 task</option>
                    <option value="100">100 task</option>
                    <option value="150">150 task</option>
                </select>
                {loading && <Loading />}
            </div>
        </>
    )
}
export default FilterTodo;