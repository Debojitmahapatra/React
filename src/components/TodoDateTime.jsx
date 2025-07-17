import { useEffect, useState } from "react"

export const TodoDataTime=()=>{
     const [dateTime, setDateTime] = useState('')
      
     //?! to add date and time
  

    useEffect(() => {
        
    const newDt=  setInterval(() => {
        let dt = new Date()
        let modeDate = dt.toLocaleDateString()
        let modeTime = dt.toLocaleTimeString()
            setDateTime(`${modeDate} - ${modeTime}`)
        }, 1000)
        return () => clearInterval(newDt)
    }, [])

   return <h2 className='date-time'>{dateTime}</h2>
}