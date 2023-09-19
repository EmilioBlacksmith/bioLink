import { DarkModeToggle } from './darkModeToggle';
import './index.css'
import { Links } from './links'
import { Profile } from './Profile';

function App() {

  return (
    <div className="h-screen flex justify-center flex-col space-y-8 items-center bg-slate-400 dark:bg-slate-800"> 
      <Profile />
      <DarkModeToggle />
      <Links/>
    </div>
  )
}

export default App
