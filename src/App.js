import './App.css';
import {useReducer, useState} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFooter from './TodoFooter';

function reducer(state, action) {
  if (action.type === 'add') {
    return [
      ...state,
      {
        id: Math.random(),
        text: action.payload.text,
        isCompleted: false,
      },
    ];
  } else if (action.type === 'delete') {
    return state.filter((t) => t.id !== action.payload.id);
  } else if (action.type === 'change') {
    return state.map((todo) => {
      if (todo.id === action.payload.newTodo.id) {
        return action.payload.newTodo;
      }
      return todo;
    });
  } else if (action.type === 'isCompleted') {
    return state.filter((todo) => !todo.isCompleted);
  }
}

function App() {
// We use the "useReducer" hook when working with complex structures
// instead of "useState"
  const [todos, dispatch] = useReducer(reducer, [
    {
      id: Math.random(),
      text: 'JavaScript',
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: 'React JS',
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: 'Node JS',
      isCompleted: false,
    },
  ]);

  return (
    <div className="App">
      <TodoForm onAdd={(text) => {
        dispatch({
          type: 'add',
          payload: {
            text: text,
          },
        });
              // setTodos([
              //   ...todos,
              //   {
              //     id: Math.random(),
              //     text: text,
              //     isCompleted: false,
              //   }
              // ]);
      }} />
      <TodoList 
        todos={todos} 
        onDelete={(todo) => {
          dispatch({
            type: 'delete',
            payload: {
              id: todo.id,
            },
          });
                // setTodos(todos.filter((t) => t.id !== todo.id));
        }}
        onChange={(newTodo) => {
          dispatch({
            type: 'change',
            payload: {
              newTodo: newTodo,
            }
          });
                // setTodos(todos.map((todo) => {
                //   if (todo.id === newTodo.id) {
                //     return newTodo;
                //   }
                //   return todo;
                // }));
        }}
      />
      <TodoFooter todos={todos} onClearCompleted={() => {
        dispatch({
          type: 'isCompleted',
          payload: {
            isCompleted: todos.isCompleted,
          },
        });
              // setTodos(todos.filter((todo) => !todo.isCompleted));
      }} />
    </div>
  );
}

export default App;
