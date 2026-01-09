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
        if(tasks.length>0 || localStorage.getItem('tasks')){
            localStorage.setItem("tasks",JSON.stringify(tasks));
        }
    },[tasks])

    const addtask = (task)=>{
        setTasks((prevtasks)=>[...prevtasks,{...task,id:crypto.randomUUID(),status:'pending'}])
    };

    const updatetask = (id,updates)=>{
        setTasks(tasks.map(task=>task.id===id?{...task,...updates}:task))
    };

    const [selected,setSelected] = useState("dashboard")

    const options = [
        {name:'Work', color:'bg-blue-500'},
        {name:'Personal', color:'bg-purple-500'},
        {name:'Exercise', color:'bg-green-500'},
        {name:'Deep Work', color:'bg-orange-500'},
        {name:'Misc', color:'bg-red-500'}
    ]
    const [category,setCategory] = useState("Work")

    
    

    return(
        <PlannerContext.Provider value={{tasks,selectedDate,setSelectedDate,addtask,updatetask,isFormOpen,setIsFormOpen, editingTask, setEditingTask, selected, setSelected, options, category, setCategory}}>
                {children}
            </PlannerContext.Provider>
    )
    
};