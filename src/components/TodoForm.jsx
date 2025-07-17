import { useState } from "react"

export const TodoForm=({onAddTodo})=>{
     const [inputVal, setInputVal] = useState('')
        const handleInput = (val) => {
        setInputVal(val)
    }
  const handleFormSubmit = (event) => {
     event.preventDefault()
     onAddTodo(inputVal)
       setInputVal("")
  }
    
    return (
        
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
    )
}