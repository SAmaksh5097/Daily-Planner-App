import React, { useContext } from 'react'
import Notepad from './Notepad'
import { ListPlus } from 'lucide-react'
import { PlannerContext } from './Context/PlannerContext'

const QuickActions = () => {
  const {setIsFormOpen, isFormOpen} = useContext(PlannerContext)
  console.log(isFormOpen)
  return (
    <div className=' w-[20%]  p-2 h-full flex flex-col gap-5 '>
      <div className='flex flex-col items-center  text-black dark:text-white shadow-xs hover:shadow-gray-500 hover:bg-gray-800 shadow-white dark:bg-gray-500 rounded-2xl cursor-pointer' onClick={()=>setIsFormOpen(true)} >
        <ListPlus className='w-10 h-10'/>
        <h1>Add event/task</h1>
      </div>
      <Notepad/>
      
    </div>
  )
}

export default QuickActions
