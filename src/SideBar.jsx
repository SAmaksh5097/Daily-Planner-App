import React from 'react'
import Weather from './Weather'

const SideBar = () => {
  return (
    <div className=' w-full lg:w-[20%] p-2 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 transition-all ease-in-out '>
        <Weather/>
    </div>
  )
}

export default SideBar
