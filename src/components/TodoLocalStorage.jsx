let todoKey="reactTODO"

export const GetDataFromLocalStorage=()=>{
    let getFromLocal=JSON.parse(localStorage.getItem(todoKey))
        if(!getFromLocal) return []
        return getFromLocal
}

export const SetDataToLocalStorage=(Arr)=>{
     localStorage.setItem(todoKey,JSON.stringify(Arr))
}