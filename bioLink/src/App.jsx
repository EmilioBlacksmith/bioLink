import { DarkModeToggle } from './darkModeToggle';
import './index.css'
import { Links } from './links'
import { Profile } from './Profile';

function App() {

  return (
    <div className="h-screen flex justify-center items-center flex-col space-y-24 bg-slate-500 dark:bg-slate-800"> 
      <div className='h-3/4 max-w-screen-2xl w-11/12 flex-col space-y-6 flex justify-center items-center'>
        <Profile />
        <DarkModeToggle />
        <Links />
      </div>
      <div className='text-black dark:text-white'>
        <p>Developed by <a href='https://github.com/EmilioBlacksmith'><b>Emilio Blacksmith</b></a></p>
      </div>
    </div>
  )
}

export default App
