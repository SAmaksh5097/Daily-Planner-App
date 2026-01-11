import React, { useContext, useMemo, useState } from 'react'
import { PlannerContext } from './Context/PlannerContext'
import APHeader from './Components/APHeader'
import MetricCard from './Components/MetricCard'
import { motion, AnimatePresence } from 'framer-motion'
import WeeklyProgress from './Components/WeeklyProgress'

const AnalyticsPage = () => {
  
  const {tasks} = useContext(PlannerContext)
  const [startDate, setStartDate] = useState(()=>{
    const d = new Date()
    d.setDate(d.getDate()-7)
    return d.toISOString().split('T')[0]
  })
  const [endDate,setEndDate] = useState(new Date().toISOString().split('T')[0])

  const filtertask = useMemo(()=>{
    return tasks.filter(task=>{
      return task.date>=startDate && task.date<=endDate
    },[tasks,startDate,endDate])
  })

  const total = filtertask.length;
  const completed = filtertask.filter(task=>task.status==="completed").length;
    
  return (
    <div className='w-full h-screen px-4 py-2 flex flex-col gap-4 bg-white dark:bg-slate-800 '>
      <APHeader startDate={startDate} endDate={endDate} setEndDate={setEndDate} setStartDate={setStartDate}/>
      <div className='flex justify-evenly gap-4'>
        <AnimatePresence mode='popLayout'>
          <MetricCard name="Total Tasks" total = {total} completed={completed} heading="tasks completed"/>
          <MetricCard name="Completion Rate" total = {total} completed={completed} heading="%"/>
        </AnimatePresence>
      </div>
      <div className='w-full flex justify-center'>
        <WeeklyProgress startDate={startDate} endDate={endDate} tasks={filtertask}/>
      </div>

        
    </div>
  )
}

export default AnalyticsPage
