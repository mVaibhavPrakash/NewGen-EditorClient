import React, {useContext} from 'react'
import '../css/input.css'
import { InputContext } from '../hooks/InputContext';

export const Input = () => {
    const [Input, setInput] = useContext(InputContext);
    return (
        <div className='blogInputDiv'>
            <textarea type="text" className="blogInput" value={Input} onChange={setInput(e.target.value)}/>
        </div>
    )
}