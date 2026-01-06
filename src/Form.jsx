import { X } from 'lucide-react'
import React from 'react'

const Form = () => {
  return (
    <div className='border flex flex-col gap-5 rounded-2xl border-gray-400 '>
        <div className='flex justify-between border-b p-4 items-center'>
            <h1 className='text-xl font-bold'>New Event</h1>
            <X className='text-red-400 cursor-pointer'/>
        </div>
        <div className='px-4'>
            <form action="" className='flex flex-col gap-4'>
                <div className=''>
                    <label htmlFor="task">What needs to be done?</label>
                    <input type="text" id='task' className='border w-full rounded-md bg-gray-700 text-white p-1 outline-blue-400' />
                </div>
                <div className='flex gap-4'>
                    <label htmlFor="start">From</label>
                    <input type="time" className='border w-full rounded-md bg-gray-700 text-white p-1 outline-blue-400' id='start' />
                    <label htmlFor="stop">To</label>
                    <input type="time" className='border w-full rounded-md bg-gray-700 text-white p-1 outline-blue-400' id='stop' />
                </div>
                <div className=''>
                    <label htmlFor="date">Date</label>
                    <input type="date" id='date' className='border w-full rounded-md bg-gray-700 text-white p-1 outline-blue-400' />
                </div>
                <div className=''>
                    <label htmlFor="note">Notes</label>
                    <textarea name="note" id="note" placeholder='Add any details...' className='border w-full rounded-md bg-gray-700 text-white p-1 min-h-30 outline-blue-400' ></textarea>
                </div>
            </form>
        </div>
        <div className='border-t p-4 flex justify-end gap-5'>
            <button>Cancel</button>
            <button className='bg-gradient-to-br from-blue-600 to-indigo-900 p-2 rounded-md text-white cursor-pointer shadow-md'>Save Task</button>
        </div>
    </div>
  )
}

export default Form
