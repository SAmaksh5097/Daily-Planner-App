import AnalyticsPage from "./AnalyticsPage"
import Header from "./Header"
import PlannerGrid from "./PlannerGrid"
import QuickActions from "./QuickActions"
import SideBar from "./SideBar"
function App() {
  return (
    <div className="min-h-screen max-h-full flex flex-col transition-all ease-in-out bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <Header/>
      <div className="flex flex-col lg:flex-row flex-1 overflow-x-hidden items-stretch bg-transparent dark:bg-gray-600 w-full ">
        <SideBar/>
        <PlannerGrid/>
        <QuickActions/>
      </div>
      <AnalyticsPage/>
    </div>
  )
}

export default App
