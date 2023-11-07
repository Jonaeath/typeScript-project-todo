import React, { useState } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import {MdOutlineFileDownloadDone} from 'react-icons/md';
import './SingleTodo.css';


interface Todo {
    // Define the properties of a Todo here
    id: number;
    todo: string;
    isDone: boolean;
  }

  type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

  }

const SingleTodo = ({ todo, todos, setTodos }: Props) => {

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
      };
    
      const handleDone = (id: number) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
          )
        );
      };

      const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(
          todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
        );
        setEdit(false);
      };
    

    return (
        <form className='todos-single' onSubmit={(e)=>handleEdit(e,todo.id)}>
            
            {  
                edit ? (
                    <input value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} className='todos-single-text'/>
                ): (
                    todo.isDone ? (
                        <s className='todos-single-text'>{todo.todo}</s>
                        ) : (
                            <span className='todos-single-text'>{todo.todo}</span>
                        )
                )}        
            <div className='iconflex'>
                <span className='icon'
                onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
                >
                <AiFillEdit/>
                </span>
                <span className='icon' onClick={() => handleDelete(todo.id)}>
                    <AiFillDelete/>
                </span>
                <span className='icon' onClick={() => handleDone(todo.id)}>
                    <MdOutlineFileDownloadDone/>
                </span>
            </div>
            
        </form>
    );
};

export default SingleTodo;