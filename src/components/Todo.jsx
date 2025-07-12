import { useEffect, useState } from 'react'
import './Todo.css'
import { MdDeleteForever, MdCheck } from "react-icons/md";

export const Todo = () => {
    const [inputVal, setInputVal] = useState('')
    const [Arr, setArr] = useState([])
    const [dateTime, setDateTime] = useState('')
    const handleInput = (val) => {
        setInputVal(val)
    }
    const handleFormSubmit = (event) => {
        event.preventDefault()
        if (!inputVal) return
        if (Arr.includes(inputVal.trim()) || inputVal.trim().length == 0) {
            setInputVal("")
            return
        }
        setArr((preVal) => [...preVal, inputVal])
        console.log(Arr);
        setInputVal("")
    }
    //? to add date and time
    // let date=new Date()

    useEffect(() => {
        
    const newDt=  setInterval(() => {
        let dt = new Date()
        let modeDate = dt.toLocaleDateString()
        let modeTime = dt.toLocaleTimeString()
            setDateTime(`${modeDate} - ${modeTime}`)
        }, 1000)
        return () => clearInterval(newDt)
    }, [])

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
                <h2 className='date-time'>{dateTime}</h2>
            </header>

            <section className='form'>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input
                            type="text"
                            className='todo-input'
                            autoComplete='off'
                            value={inputVal}
                            onChange={(event) => handleInput(event.target.value)}

                        />
                    </div>
                    <div>
                        <button type='submit' className='todo-btn'>Add Task</button>
                    </div>
                </form>
            </section>
            <section className='myUnOrdList'>
                <ul>
                    {
                        Arr.map((currEle, index) => {
                            return <li key={index} className='todo-item'>
                                <span>{currEle}</span>
                                <button className='check-btn' ><MdCheck /></button>
                                <button className='delete-btn' onClick={()=>handleCheckList(currEle)}><MdDeleteForever /></button>
                            </li>
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