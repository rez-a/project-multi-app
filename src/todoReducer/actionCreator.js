import { EDIT_TODO , REMOVE_TODO , GET_TODO, SET_ERROR, FILTER_TODO, CREATE_TODO } from "./actionTypes";

export function getTodo(todos){
    return{
        type : GET_TODO,
        payload : todos
    }
}
export function editTodo(todoId){
    return{
        type : EDIT_TODO,
        payload : todoId
    }
}

export function removeTodo(todoId){
    return{
        type : REMOVE_TODO,
        payload : todoId
    }
}
export function setError(error){
    return{
        type : SET_ERROR,
        payload : error
    }
}
export function filterTodo(todos){
    return{
        type : FILTER_TODO,
        payload : todos
    }
}
export function createTodo(task){
    return{
        type : CREATE_TODO,
        payload : task
    }
}