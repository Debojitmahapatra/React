import {  useState } from 'react'
import './Todo.css'

import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoDataTime } from './TodoDateTime';
import { GetDataFromLocalStorage, SetDataToLocalStorage } from './TodoLocalStorage';


export const Todo = () => {
   
    const [Arr, setArr] = useState(()=>GetDataFromLocalStorage())
   
   
    const handleFormSubmit = (inputVal) => {
        const {id,content,checked}=inputVal
        if (!content.trim()) return
        const IfTodoMatch=Arr.find((curr)=>curr.content===content)
        if (IfTodoMatch) return
        setArr((preVal) => [...preVal, {id,content,checked}])
      
    }
  //todo add data in localStorage

//   localStorage.setItem(todoKey,JSON.stringify(Arr))
    SetDataToLocalStorage(Arr)
 
 
 
    //? one item delete button
    const handleDeleteList=(val)=>{
        let newArr=Arr.filter((curr)=>curr.content!=val)   
        setArr(newArr) 
        console.log(Arr);
        
    }
    //? handle item check button
    const handleCheckList=(val)=>{
        console.log(val)
      let IfCheck=Arr.map((curr)=>{
        if(curr.content===val){
             
            return {...curr,checked:!curr.checked}
        }
        else{
            return curr
        }    
      })
      setArr(IfCheck)
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
                            key={currEle.id} 
                            data={currEle.content}
                            checked={currEle.checked}
                            onHandleDeleteTodo={handleDeleteList}
                            onHandleCheckTodo={handleCheckList}
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