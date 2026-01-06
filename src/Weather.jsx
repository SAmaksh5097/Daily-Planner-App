import React, { useEffect, useState } from 'react'
import { MapPin, Sun, MoonStar } from 'lucide-react'
import axios from 'axios'
const Weather = () => {

    const [data,setData] = useState({})
    const getdata = async ()=>{
        const response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=28.6519&longitude=77.2315&hourly=temperature_2m,wind_speed_10m,cloud_cover&current=temperature_2m,relative_humidity_2m,is_day,apparent_temperature,wind_speed_10m,cloud_cover,surface_pressure&timezone=auto')
        setData(response.data)
        setTemp(response.data.current.temperature_2m)
    }

    const [temp,setTemp] = useState('Getting data...')

    useEffect(()=>{
        getdata()
    },[])


  return (
    <div className='w-70 max-h-fit p-4 rounded-2xl flex flex-col gap-3 outline-0 relative bg-gradient-to-br from-blue-600 to-indigo-900 text-white '>
        {/* <h1 className='flex gap-2 '>
            <MapPin/>
            Location
        </h1> */}
        <h1 className='flex gap-4 items-center text-2xl font-bold'><span className='flex text-4xl'>{temp}°C </span></h1>
        <div className='grid grid-cols-2 gap-3 '>
            <h1>RealFeel: {data?.current?.apparent_temperature}°C</h1>
            <h1>Humidity: {data?.current?.relative_humidity_2m}%</h1>
            <h1>Wind: {data?.current?.wind_speed_10m} km/h</h1>
        </div>
        {data?.current?.is_day===1?<Sun className='absolute right-1 top-2'/>:<MoonStar className='absolute right-1 top-2'/>}
    </div>
  )
}

export default Weather
