import React from 'react';
import { Clock, AlignLeft } from 'lucide-react';

const TaskCard = ({ task }) => {
  return (
    <div className="w-full p-4 mb-3 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg text-slate-900 dark:text-white capitalize">
          {task.title}
        </h3>
        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-lg uppercase">
          Task
        </span>
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