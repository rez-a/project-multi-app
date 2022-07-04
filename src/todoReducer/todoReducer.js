import { GET_TODO, REMOVE_TODO, SET_ERROR, EDIT_TODO, FILTER_TODO, CREATE_TODO } from "./actionTypes";

const todoReducer = (state, action) => {
    switch (action.type) {
        case GET_TODO:
            return {
                ...state,
                todos: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo)
            }
        case FILTER_TODO:
            return {
                ...state,
                todos: action.payload
            }
        case CREATE_TODO:
            return {
                ...state,
                todos: [action.payload , ...state.todos]
            }
    }
}
export default todoReducer;