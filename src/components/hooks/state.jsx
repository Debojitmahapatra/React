
import {useState} from 'react'



export const State=()=>{

    const [Arr,useArr]=useState([
        {name:'alice',age:25},
        {name:'bob',age:27},
        {name:'papu',age:35},
        {name:'debojit',age:28}
    ])

    return (
        <section className='mainContainer'>

      
      <h1>user list</h1>
      <ul className='main_ul'>
        {Arr.map((user,i)=>{
          return  (<li key={i}>{user.name} is {user.age} years old</li>)
        })}
      </ul>

        </section>
    )
}