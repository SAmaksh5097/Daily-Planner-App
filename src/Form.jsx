import { X } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { PlannerContext } from './Context/PlannerContext'

const Form = () => {
    const {addtask, setIsFormOpen, selectedDate, editingTask, setEditingTask, updatetask} = useContext(PlannerContext)
    const [formdata, setFormData] = useState({
        title:'', start:'',end:'',date:selectedDate,note:''
    })

    useEffect(()=>{
        if(editingTask){
            setFormData(editingTask)
        }
    },[editingTask])
    const handlechange = (e)=>{
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    }
    const handlesubmit = (e)=>{
        e.preventDefault()
        if(editingTask){
            updatetask(editingTask.id, formdata)
        }
        else{
            addtask(formdata)
        }
        handleclose()
    }
    const handleclose = ()=>{
        setIsFormOpen(false)
        setEditingTask(null)
        
    }
    
  return (
    <div className='border flex flex-col gap-5 rounded-2xl w-full max-w-md bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'>
        <div className='flex justify-between border-b p-4 items-center '>
            <h1 className='text-xl font-bold'>New Event</h1>
            <X className='text-red-400 cursor-pointer' onClick={()=>setIsFormOpen(false)}/>
        </div>
        <div className='px-4'>
            <form action="" className='flex flex-col gap-4' onSubmit={handlesubmit}>
                <div className=''>
                    <label htmlFor="title">What needs to be done?</label>
                    <input type="text" id='title' required value={formdata.title} onChange={handlechange} className='border w-full rounded-md bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500/20 p-1 outline-blue-400' />
                </div>
                <div className='flex gap-4'>
                    <label htmlFor="start">From</label>
                    <input type="time" required value={formdata.start} onChange={handlechange} className='border w-full rounded-md bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500/20 p-1 outline-blue-400' id='start' />
                    <label htmlFor="end">To</label>
                    <input type="time" value={formdata.end} onChange={handlechange} className='border w-full rounded-md bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500/20 p-1 outline-blue-400' id='end' />
                </div>
                <div className=''>
                    <label htmlFor="date">Date</label>
                    <input type="date" id='date' required value={formdata.date} onChange={handlechange} className='border w-full rounded-md bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500/20 p-1 outline-blue-400' />
                </div>
                <div className=''>
                    <label htmlFor="note">Notes</label>
                    <textarea name="note" id="note" value={formdata.note} onChange={handlechange} placeholder='Add any details...' className='border w-full rounded-md bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500/20 p-1 min-h-30 outline-blue-400' ></textarea>
                </div>
                <div className=' pb-2 flex justify-end gap-5'>
                    <button onClick={handleclose} className='cursor-pointer transition-all ease-in-out hover:bg-gray-400 rounded-md p-2'>Cancel</button>
                    <button type='submit' className='bg-blue-600 p-2 rounded-md text-white cursor-pointer shadow-md hover:bg-blue-900 transition-all ease-in-out'>Save Task</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form
