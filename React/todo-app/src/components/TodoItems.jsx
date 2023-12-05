import TodoItem from "./TodoItem"

const TodoItems = ({ todoItems }) => {
    return (
        <>
            <div className="item-container">
                {todoItems.map(Item => (
                    <TodoItem todoDate={Item.dueDate} todoName={Item.name}></TodoItem>
                ))}
            </div>
        </>
    )
}

export default TodoItems