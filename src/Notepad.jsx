import React, { useEffect, useState } from 'react'

const Notepad = () => {
    const [data,setData] = useState(localStorage.getItem("data")||"")
    const handleChange = (e)=>{
        setData(e.target.value)
    }
    useEffect(()=>{
        localStorage.setItem("data",data)
    },[data])

    const clear = ()=>{
        setData("")
        localStorage.setItem("data","")
    }




  return (
    <div className='h-full '>
        <div className='flex justify-between items-center'>
            <h1>SCRATCHPAD</h1>
            <button className='text-xs text-blue-400 cursor-pointer' onClick={clear}>Clear</button>
        </div>

        <textarea name="note" id="" value={data} onChange={handleChange} placeholder='Write your notes...' className='border w-[100%] rounded-2xl  bg-yellow-50 border-yellow-200 text-black p-1 resize-none min-h-[90%]  dark:bg-gray-700 dark:text-white '>

        </textarea>
      
    </div>
  )
}

export default Notepad
