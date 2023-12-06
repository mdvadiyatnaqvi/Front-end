import TodoItem from "./TodoItem"

const TodoItems = ({ todoItems }) => {
    return (
        <>
            <div className="item-container">
                {todoItems.map(Item => (
                    <TodoItem key={Item.name} todoDate={Item.dueDate} todoName={Item.name}></TodoItem>
                ))}
            </div>
        </>
    )
}

export default TodoItems