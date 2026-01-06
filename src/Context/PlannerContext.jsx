import { createContext, useState } from "react";

export const PlannerContext = createContext()
export const PlannerProvider = ({children})=>{
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
    const [tasks,setTasks] = useState([])
    const [isFormOpen,setIsFormOpen] = useState(false)
    

    const addtask = (task)=>{
        setTasks([...tasks,{...task,id:crypto.randomUUID(),status:'pending'}])
    };

    const updatetask = (id,updates)=>{
        setTasks(tasks.map(task=>task.id===id?{...task,...updates}:task))
    };

    return(
        <PlannerContext.Provider value={{tasks,selectedDate,setSelectedDate,addtask,updatetask,isFormOpen,setIsFormOpen}}>
                {children}
            </PlannerContext.Provider>
    )
    
};