import { createContext, useEffect, useState } from "react";

export const PlannerContext = createContext()
export const PlannerProvider = ({children})=>{
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
    const [tasks,setTasks] = useState(()=>{
        const saved = localStorage.getItem('tasks')
        return saved?JSON.parse(saved):[]
    })
    const [isFormOpen,setIsFormOpen] = useState(false)
    const [editingTask,setEditingTask] = useState(null)

    
    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks));
    },[tasks])

    const addtask = (task)=>{
        setTasks([...tasks,{...task,id:crypto.randomUUID(),status:'pending'}])
    };

    const updatetask = (id,updates)=>{
        setTasks(tasks.map(task=>task.id===id?{...task,...updates}:task))
    };

    return(
        <PlannerContext.Provider value={{tasks,selectedDate,setSelectedDate,addtask,updatetask,isFormOpen,setIsFormOpen, editingTask, setEditingTask}}>
                {children}
            </PlannerContext.Provider>
    )
    
};