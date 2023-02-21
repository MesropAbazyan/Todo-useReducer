function TodoFooter({todos, onClearCompleted}) {
    const completed = todos.filter((todo) => todo.isCompleted).length;

    return (
        <div>
            <span>{completed}/{todos.length} completed</span>
            <button onClick={onClearCompleted}>Clear completed</button>
        </div>
    );
}

export default TodoFooter;