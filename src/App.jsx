import Header from "./Header"
import PlannerGrid from "./PlannerGrid"
import QuickActions from "./QuickActions"
import SideBar from "./SideBar"
function App() {
  return (
    <div className="min-h-screen max-h-full flex flex-col  bg-gray-300 transition-all ease-in-out dark:bg-neutral-800 dark:text-white">
      <Header/>
      <div className="flex h-screen bg-red-50 dark:bg-gray-600 max-w-screen ">
        <SideBar/>
        <PlannerGrid/>
        <QuickActions/>
      </div>
    </div>
  )
}

export default App
