function TodoItem({todo, onChange, onDelete}) {
    return (
        <div>
            <label>
                <input 
                    type='checkbox' 
                    checked={todo.completed} 
                    onChange={(evt) => {
                        onChange({
                            ...todo,
                            isCompleted: evt.target.checked,
                        });
                    }}
                />
                <span>{todo.text}</span>
                <button onClick={() => {
                    onDelete(todo);
                }}>X</button>
            </label>
        </div>
    )
}

export default TodoItem;