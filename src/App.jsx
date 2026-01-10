import AnalyticsPage from "./AnalyticsPage"
import Dashboard from "./Dashboard"
import Header from "./Header"
import {Route, Routes} from 'react-router-dom'
import {motion, AnimatePresence} from 'framer-motion'
function App() {
  return (
      <div layout initial={{opacity:0,y:20}} animate={{opacity:1, y:0,transition: { duration: 0.5 }}} className="min-h-screen max-h-full flex flex-col transition-all ease-in-out bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50">
        <Header/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/analytics' element={<AnalyticsPage/>}/>
        </Routes>
      </div>
  )
}

export default App
