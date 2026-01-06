import { X } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { PlannerContext } from './Context/PlannerContext'

const Form = () => {
    const {addtask, setIsFormOpen, selectedDate} = useContext(PlannerContext)
    const [formdata, setFormData] = useState({
        title:'', start:'',end:'',date:selectedDate,note:''
    })

    const handlechange = (e)=>{
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    }
    const handlesubmit = (e)=>{
        e.preventDefault()
        addtask(formdata)
        setIsFormOpen(false)
    }
    



  return (
    <div className='border flex flex-col gap-5 rounded-2xl border-gray-400 bg-gray-800 w-full max-w-md '>
        <div className='flex justify-between border-b p-4 items-center'>
            <h1 className='text-xl font-bold'>New Event</h1>
            <X className='text-red-400 cursor-pointer' onClick={()=>setIsFormOpen(false)}/>
        </div>
        <div className='px-4'>
            <form action="" className='flex flex-col gap-4' onSubmit={handlesubmit}>
                <div className=''>
                    <label htmlFor="title">What needs to be done?</label>
                    <input type="text" id='title' required value={formdata.title} onChange={handlechange} className='border w-full rounded-md bg-gray-700 text-white p-1 outline-blue-400' />
                </div>
                <div className='flex gap-4'>
                    <label htmlFor="start">From</label>
                    <input type="time" value={formdata.start} onChange={handlechange} className='border w-full rounded-md bg-gray-700 text-white p-1 outline-blue-400' id='start' />
                    <label htmlFor="stop">To</label>
                    <input type="time" value={formdata.end} onChange={handlechange} className='border w-full rounded-md bg-gray-700 text-white p-1 outline-blue-400' id='stop' />
                </div>
                <div className=''>
                    <label htmlFor="date">Date</label>
                    <input type="date" id='date' value={formdata.date} onChange={handlechange} className='border w-full rounded-md bg-gray-700 text-white p-1 outline-blue-400' />
                </div>
                <div className=''>
                    <label htmlFor="note">Notes</label>
                    <textarea name="note" id="note" value={formdata.note} onChange={handlechange} placeholder='Add any details...' className='border w-full rounded-md bg-gray-700 text-white p-1 min-h-30 outline-blue-400' ></textarea>
                </div>
                <div className=' pb-2 flex justify-end gap-5'>
                    <button onClick={()=>{setIsFormOpen(false)}} className='cursor-pointer'>Cancel</button>
                    <button type='submit' className='bg-gradient-to-br from-blue-600 to-indigo-900 p-2 rounded-md text-white cursor-pointer shadow-md'>Save Task</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form
