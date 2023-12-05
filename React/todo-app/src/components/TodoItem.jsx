const TodoItem = ({ todoName, todoDate }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">{todoName}</div>
                <div className="col-4">{todoDate}</div>
                <div className="col-4">
                    <button type="button" className="btn btn-danger spec">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem