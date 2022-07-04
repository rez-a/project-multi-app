import { useContext } from "react";
import { useEffect } from "react";
import CreateTodo from "../../components/CreateTodo";
import Error from "../../components/Error";
import FilterTodo from "../../components/FilterTodo";
import Spinner from "../../components/Spinner";
import TodoSummary from "../../components/TodoSummary";
import TodoContext from "../../todoReducer/todoContext/todoContext";

const Todos = () =>{
    const {todos , error , getTodos} = useContext(TodoContext);
    useEffect(()=>{
        getTodos();
    },[getTodos]);

    return (
        <>
            <CreateTodo />
            <FilterTodo />
            {!todos && !error && <Spinner />}
            {error && <Error error={error}/>}
            {todos && todos.map(todo => <TodoSummary key={todo.id}  todo={todo}/>)}
        </>
    )
}
export default Todos;