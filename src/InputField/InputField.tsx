import { useRef } from 'react';
import './InputField.css'

interface Props {
    todo: string;
    setTodo:  React.Dispatch<React.SetStateAction<string>>
    handelAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC <Props> = ({todo, setTodo, handelAdd}: Props) => {

    const inputRef = useRef<HTMLInputElement>(null);

    return (
    <form className='input' onSubmit={(e)=>{
        handelAdd(e)
        inputRef.current?.blur();
    }}>
            <input type = "input" 
            ref = {inputRef}
            value={todo}
            onChange={(e)=>setTodo(e.target.value)
            }
            placeholder='Enter a task' 
            className='input-box'/>
            <button className='input-submit' type='submit'>GO</button>
        </form>
    );
};

export default InputField;