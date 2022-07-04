import '../pages/todos/todos.css';
import DeleteTodo from './DeleteTodo';
import EditTodo from './EditTodo';
const TodoSummary = ({ todo }) => {
    const cardStyle = 'card-body d-flex justify-content-between align-items-center';
    const titleStyle = 'todo-title mb-0 me-3';
    return (
        <>
            <div className="col-4">
                <div className="card">
                    <div className={todo.completed ? `${cardStyle} bg-light` : cardStyle}>
                        <p className={todo.completed ? `${titleStyle} text-decoration-line-through` : titleStyle}>{todo.title}</p>
                        <div className="buttons d-flex align-items-center">
                            <EditTodo todo={todo}/>
                            <DeleteTodo todo={todo}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TodoSummary;