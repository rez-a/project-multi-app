import axios from "axios";
import { useCallback } from "react";
import { useReducer } from "react";
import successToast from "../../utilities/successToast";
import unSuccessToast from "../../utilities/unSuccessToast";
import { createTodo, editTodo, filterTodo, getTodo, removeTodo, setError } from "../actionCreator";
import todoReducer from "../todoReducer";
import TodoContext from "./todoContext";

const TodoProvider = ({ children }) => {
    const initialState = {
        todos: [],
        error: null
    }
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const getTodos = useCallback(async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
        try {
            if (res.status === 200) {
                dispatch(getTodo(res.data));
                dispatch(setError(null));
            } else {
                throw Error();
            }
        } catch (err) {
            dispatch(getTodo([]));
            dispatch(setError(err));
        }

    }, []);
    const deleteTodos = async (todoId) => {
        try {
            const res = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
            if (res.status === 200) {
                dispatch(removeTodo(todoId));
                successToast('The task was successfully deleted');
            } else {
                throw Error();
            }
        } catch (err) {
            unSuccessToast('Something went wrong');
        }
    }
    const editTodos = async (todo) => {
        try {
            const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, { ...todo, completed: !todo.completed })
            if (res.status === 200) {
                dispatch(editTodo(todo));
                successToast('The task was edited successfully');
            } else {
                throw Error();
            }
        } catch (err) {
            unSuccessToast('Something went wrong');
        }
    }
    const filterTodos = async (filter) => {
        try {
            let res;
            if (typeof filter === "number") {
                res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${filter}`)
            } else {
                res = await axios.get(`https://jsonplaceholder.typicode.com/todos?completed=${filter}`)
            }
            if (res.status === 200) {
                dispatch(filterTodo(res.data))
                successToast('Tasks are filtered');
            } else {
                throw Error();
            }
        } catch (err) {
            unSuccessToast('Something went wrong')
        }

    }
    const createTodos = async (title) => {
        const task = { title, completed: false }
        try {
            const res = await axios.post('https://jsonplaceholder.typicode.com/todos', task);
            if(res.status === 201){
                dispatch(createTodo(res.data));
                successToast('Task created successfully');
            }else{
                throw Error();
            }
        }catch(err){
            unSuccessToast('Something went wrong');
        }
    }

    return (
        <TodoContext.Provider value={{ ...state, getTodos, deleteTodos, editTodos, filterTodos, createTodos }}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoProvider;