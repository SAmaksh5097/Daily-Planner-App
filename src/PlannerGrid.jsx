import React, { useContext } from 'react'
import { PlannerContext } from './Context/PlannerContext'
import Form from './Form'

const PlannerGrid = () => {
  const {tasks, selectedDate, setSelectedDate} = useContext(PlannerContext)

  const changeDate = (e)=>{
    setSelectedDate(e.target.value)
  }

  const dailytasks = tasks.filter(task=>task.date===selectedDate)
  return (
    <div className=' w-[60%] px-10 py-5 bg-gray-300 dark:bg-neutral-800 flex flex-col gap-1 items-center  '>
      <div className='flex gap-4'>
        <input type="date" value={selectedDate} className='' onChange={changeDate}  />
      </div>
      <div className='border h-full rounded-2xl p-4 flex flex-col items-center justify-center dark:bg-gray-600 w-full  '>

        <h1>Planner grid</h1>
        <Form/>
      </div>
    
    </div>
  )
}

export default PlannerGrid
