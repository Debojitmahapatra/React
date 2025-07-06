import './Switch.css'
import { useState } from 'react'
export const Switch=()=>{
    const[Change,setChange]=useState(false)
    const handleOnAndOff=()=>{
        setChange(!Change)
    }
     return (
        <>
        <div style={{
            height:'100vh',
            width:'100vw',
            backgroundColor:Change?'lightblue':'#332727',
            display:'grid',
            placeItems:"center",
            transition:'all 0.3s linear'
            }}>
         <div className={`button`} style={{backgroundColor:Change?'aquamarine':'#140a0a'}} onClick={handleOnAndOff}>
            <div className={`round  ${Change?"on_button ":"off_button "}`}>
                <h2 className="on_text text">{Change?"ON":"OFF"}</h2>
                </div>
        </div>
        </div>
        </>
     )
}

