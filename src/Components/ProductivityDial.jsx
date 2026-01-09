import React, { useContext } from 'react'
import { PlannerContext } from '../Context/PlannerContext'
import {motion, progress} from 'framer-motion'
const ProductivityDial = () => {
    const {tasks, selectedDate} = useContext(PlannerContext);
    const total = tasks.filter(task=>task.date===selectedDate).length;
    const completed = tasks.filter(task=>task.status==='completed' && task.date===selectedDate).length

    console.log(total,completed);
    const percentage = total>0?(completed/total):0;

    
    
  return (
    <div className=' flex items-center gap-3 rounded-2xl w-fit h-fit p-6 dark:bg-slate-800 bg-white border-slate-200 shadow-md  '>
        <div className='flex flex-col items-start'>
            <h1 className='dark:text-blue-100 text-gray-500'>PRODUCTIVITY</h1>
            <div className='flex items-center relative '>
                <svg className=' -rotate-90 w-full h-full' width="100" height="100" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="darkgray" strokeWidth="6"/>
                        <motion.circle cx="50" cy={50} r={40} stroke="#3b82f6" strokeWidth="6" fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: percentage }} 
            transition={{ duration: 1, ease: "easeOut" }}/>
                </svg>
                <div className="absolute  inset-0 flex items-center justify-center">
                    <span className='text-blue-300'>{Math.round(percentage*100)}%</span>
                </div>
            </div>
        </div>
            <div>
                <h1 className='text-xl font-bold'>Daily Goal</h1>
                <h1 className='dark:text-blue-100 text-gray-500 text-xs'>{completed}/{total} Tasks Completed</h1>
            </div>


        
      
    </div>
  )
}

export default ProductivityDial
