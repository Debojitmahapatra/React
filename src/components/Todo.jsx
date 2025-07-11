import { useEffect, useState } from 'react'
import './Todo.css'
import { MdDeleteForever,MdCheck  } from "react-icons/md";

export const Todo=()=>{
    const [inputVal,setInputVal]=useState('')
    const [Arr,setArr]=useState([])
    const [date,setDate]=useState(new Date())
    const handleInput=(val)=>{
        setInputVal(val)
    }
    const handleFormSubmit=(event)=>{
        event.preventDefault()
        if(!inputVal) return 
        if(Arr.includes(inputVal.trim()) || inputVal.trim().length==0){ 
             setInputVal("")
            return
         }
        setArr((preVal)=> [...preVal,inputVal] )
        console.log(Arr);
        setInputVal("")
    }
    //? to add date and time
    // let date=new Date()

    useEffect(()=>{
        let newDate=new Date()
         let modeDate=newDate.toLocaleDateString()
      let modeTime=newDate.toLocaleTimeString()
   let interVal= setInterval(()=>{
         setDate(`${modeDate} - ${modeTime}`)
      },1000)
      return()=>clearInterval(newDate)
    },[])
    
      
    
      
    return (
        <section className='todo-container'>
            <header>
                <h1>Todo List</h1>
                <h2 className='date-time'>{date}</h2>
            </header>

            <section className='form'>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input
                         type="text"
                         className='todo-input'
                         autoComplete='off' 
                         value={inputVal}
                         onChange={(event)=>handleInput(event.target.value)}

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
                        Arr.map((currEle,index)=>{
                             return <li key={index} className='todo-item'>
                               <span>{currEle}</span> 
                               <button className='check-btn'><MdCheck/></button>
                               <button className='delete-btn'><MdDeleteForever/></button>
                                </li>
                        })
                    }
                </ul>
            </section>
        </section>
    )
}