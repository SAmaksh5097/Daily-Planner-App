import React from 'react'
import ThemeToggle from './ThemeToggle'
import {CalendarCheck2} from 'lucide-react'
const Header = () => {
  return (
    <div className='h-fit w-full flex flex-row justify-between items-center p-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm shadow-slate-200/50'>
        <h1 className='text-2xl font-bold flex gap-2 items-center '>{<CalendarCheck2 className=' rounded w-10 h-10 text-blue-600 dark:text-blue-400'/>} Daily Planner</h1>
        <ThemeToggle/>
    </div>
  )
}

export default Header
