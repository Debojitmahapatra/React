
import {useState} from 'react'



export const State=()=>{
    // const users=[
    //     {name:'alice',age:25},
    //     {name:'bob',age:27},
    //     {name:'papu',age:35},
    //     {name:'debojit',age:28},
    // ]
    const [Arr,useArr]=useState([
        {name:'alice',age:25},
        {name:'bob',age:27},
        {name:'papu',age:35},
        {name:'debojit',age:28}
    ])


    // const [count,setCount]=useState(0)

    // const handleIncrement=()=>{
    //     useArr(()=>{
    //         for (let i = 0; i < users.length; i++) {
    //             Arr.push(users[i])
    //             }
    //     })
    // }
    //  const handleDecrement=()=>{
    //     setCount(()=>count-1)
    // }
    return (
        <section className='mainContainer'>
        {/* <h1>{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button> */}
      
      <h1>user list</h1>
      <ul className='main_ul'>
        {Arr.map((user,i)=>{
          return  (<li key={i}>{user.name} is {user.age} years old</li>)
        })}
      </ul>
        {/* <button onClick={handleIncrement}>Increment</button> */}
        </section>
    )
}