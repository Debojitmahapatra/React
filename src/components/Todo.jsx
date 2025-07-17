import {  useState } from 'react'
import './Todo.css'

import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoDataTime } from './TodoDateTime';

export const Todo = () => {
   
    const [Arr, setArr] = useState([])
   
   
    const handleFormSubmit = (inputVal) => {
        if (!inputVal) return
        if (Arr.includes(inputVal.trim()) || inputVal.trim().length == 0) return
        setArr((preVal) => [...preVal, inputVal])
      
    }
 
    //? one item delete button
    const handleCheckList=(val)=>{
        let newArr=Arr.filter((curr)=>curr!=val)   
        setArr(newArr) 
        console.log(Arr);
        
    }
    //? clear button

    const handleClearButton=()=>{
        setArr([])
    }

    return (
        <section className='todo-container'>
            <header>
                <h1>Todo List</h1>
                <TodoDataTime/>
            </header>

            <TodoForm onAddTodo={handleFormSubmit}/>
            <section className='myUnOrdList'>
                <ul>
                    {
                        Arr.map((currEle, index) => {
                            return <TodoList 
                            key={index} 
                            data={currEle}
                            onHandleDeleteTodo={handleCheckList}
                            />
                        })
                    }
                </ul>
            </section>
            <section>
                <button className='clear-btn' onClick={handleClearButton}>Clear All</button>
            </section>
        </section>
    )
}