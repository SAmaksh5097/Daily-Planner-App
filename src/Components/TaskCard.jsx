import React, { useContext } from 'react';
import { Clock, AlignLeft, PencilIcon, CircleCheckBig } from 'lucide-react';
import { PlannerContext } from '../Context/PlannerContext';

const TaskCard = ({ task }) => {
  const {updatetask, setIsFormOpen, setEditingTask} = useContext(PlannerContext)

  const handedit = ()=>{
    setIsFormOpen(true)
    setEditingTask(task)
  }
  const completed = task.status==='completed'


  return (
    <div className="w-full p-4 mb-3 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl hover:shadow-md transition-shadow dark:hover:shadow-neutral-600">
      <div className="flex justify-between items-start mb-2">
        <h3 className={`font-bold text-lg text-slate-900 dark:text-white capitalize ${completed?'line-through':''}` }>
          {task.title}
        </h3>
        <div className='flex gap-5'>
          <CircleCheckBig className={`cursor-pointer hover:scale-120 transition-all ease-in-out ${completed?'text-green-500':''}`} onClick={()=>{updatetask(task.id,{status:task.status==='completed'?'pending':'completed'})}}/>
          <PencilIcon onClick={handedit} className='cursor-pointer hover:scale-120 transition-all ease-in-out'/>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{task.start} — {task.end || 'No end time'}</span>
        </div>
        
        {task.note && (
          <div className="flex items-start gap-2">
            <AlignLeft className="w-4 h-4 mt-1" />
            <p className="line-clamp-2 italic">{task.note}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskCard;