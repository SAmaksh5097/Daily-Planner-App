import React, { useContext } from 'react'
import { PlannerContext } from './Context/PlannerContext'
import Form from './Form'

const PlannerGrid = () => {
  const {tasks, selectedDate, setSelectedDate, isFormOpen} = useContext(PlannerContext)

  const changeDate = (e)=>{
    setSelectedDate(e.target.value)
  }

  const dailytasks = tasks.filter(task=>task.date===selectedDate)
  return (
    <div className='w-[60%] px-10 py-5 bg-gray-300 dark:bg-neutral-800 flex flex-col gap-1 items-center relative'>
      <div className='flex gap-4'>
        <input type="date" value={selectedDate} onChange={changeDate} />
      </div>
      
      {isFormOpen && (
        <div className='fixed inset-0 bg-black/90 flex items-center justify-center z-50'>
           <Form />
        </div>
      )}
      <div className='border h-full rounded-2xl p-4 flex flex-col items-center justify-center dark:bg-gray-600 w-full'>
        {dailytasks.length}
        <h1>Planner grid. tasks will be shown here</h1>
      </div>
    </div>
  );
};


export default PlannerGrid
