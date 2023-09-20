import { useEffect, useState } from 'react'
import '../styles/darkModeToggle.css'

export function DarkModeToggle(){
    const [theme, setTheme] = useState('light');

    useEffect(() =>{
        if(theme === 'dark')
        document.querySelector('html').setAttribute("data-theme", 'dark');
        else
        document.querySelector('html').setAttribute("data-theme", 'light');
    }, [theme])

    const handleDarkMode = (e) => {
        if(e.target.checked) setTheme('dark');
        else setTheme('light');
    }

    return (
        <>
        <input 
            className='dark_mode_input'
            type='checkbox'
            id='darkmode-toggle'
            onChange={handleDarkMode}
        >   
        </input>
        </>
    )
}