import React from 'react'
import ThemeToggle from './ThemeToggle'
import {CalendarCheck2} from 'lucide-react'
const Header = () => {
  return (
    <div className='h-fit w-full flex flex-row justify-between items-center p-3 shadow-xs shadow-gray-400 bg-red-50 dark:bg-gray-600 dark:text-white border-b border-neutral-500'>
        <h1 className='text-2xl font-bold flex gap-2 items-center '>{<CalendarCheck2 className=' rounded w-10 h-10'/>} Daily Planner</h1>
        <ThemeToggle/>
    </div>
  )
}

export default Header
