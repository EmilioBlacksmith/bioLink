import { DarkModeToggle } from './components/DarkModeToggle';
import './index.css'
import { Links } from './components/Links';
import { Profile } from './components/Profile';

function App() {

  return (
    <div className='container'> 
      <div className='header'>
        <DarkModeToggle />
      </div>
      <div className='content'>
        <Profile />
        <Links />
      </div>
      <div className='footer'>
        <p>Developed by <a href='https://github.com/EmilioBlacksmith' target='_blank'><b>Emilio (Blacksmith) Herrera 󰊤</b></a>. </p>
      </div>
    </div>
  )
}

export default App
