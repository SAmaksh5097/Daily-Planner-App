import React, { useMemo } from 'react'

const WeeklyProgress = ({tasks, startDate, endDate}) => {
    const chartData = useMemo(()=>{
        const bucket = {
            'Mon':{completed:0,pending:0,total:0},
            'Tue':{completed:0,pending:0,total:0},
            'Wed':{completed:0,pending:0,total:0},
            'Thu':{completed:0,pending:0,total:0},
            'Fri':{completed:0,pending:0,total:0},
            'Sat':{completed:0,pending:0,total:0},
            'Sun':{completed:0,pending:0,total:0}
        }
        const week = ['Mon','Tue','Wed','Thu', 'Fri', 'Sat', 'Sun']

        tasks.forEach(task=>{
            const date = new Date(task.date)
            const day = date.toLocaleDateString('en-US',{weekday:'short'})
            if(bucket[day]){
                if(task.status==='completed'){
                    bucket[day].completed++;
                }
                else{
                    bucket[day].pending++;
                }
                bucket[day].total++;
            }
        })
        return week.map(day=>({
            day,
            completed: bucket[day].completed,
            pending: bucket[day].pending,
            total: bucket[day].total

        }))
    },[tasks])
    const maxTasks = Math.max(...chartData.map(d => d.total)) || 5


  return (
    <div className='border p-4 rounded-2xl'>
        <h1 className='text-2xl font-medium'>Weekly Progress</h1>
        <div className='flex justify-between'>
            <h1>Tasks Completed vs. Pending</h1>
            <div className='flex gap-4'>
                <div className='flex items-center gap-1'>
                    <div className='w-3 h-3 bg-blue-500 rounded-full'></div>
                    <h1>Completed</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <div className='w-3 h-3 bg-gray-400 rounded-full'></div>
                    <h1>Pending</h1>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default WeeklyProgress
