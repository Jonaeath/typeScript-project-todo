import React from 'react';
import SingleTodo from '../SingleTodo/SingleTodo';
import './TodoList';


interface Todo {
    // Define the properties of a Todo here
    id: number;
    todo: string;
    isDone: boolean;
  }

interface Props {
    todos : Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todos, setTodos}: Props) => {
    return (
        <div className='todos'>
            {
                todos.map((todo)=>(
                    <SingleTodo 
                    todo={todo} 
                    key={todo.id} 
                    todos={todos} 
                    setTodos = {setTodos} />
                ))
            }
        </div>
    );
};

export default TodoList;