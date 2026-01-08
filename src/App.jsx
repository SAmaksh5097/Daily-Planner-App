import AnalyticsPage from "./AnalyticsPage"
import Dashboard from "./Dashboard"
import Header from "./Header"
function App() {
  return (
    <div className="min-h-screen max-h-full flex flex-col transition-all ease-in-out bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <Header/>
      <Dashboard/>
      <AnalyticsPage/>
    </div>
  )
}

export default App
