import { useEffect, useState } from 'react'
import '../styles/darkModeToggle.css'

export function DarkModeToggle(){
    const [theme, setTheme] = useState(() =>{
        let selectedTheme = localStorage.getItem("selectedTheme");

        if(selectedTheme !== null){
            return selectedTheme;
        }

        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            return 'dark';
        }

        return 'light';
    });

    const handleDarkMode = (e) => {
        if(e.target.checked){
            setTheme('dark');
            localStorage.setItem("selectedTheme", 'dark')
        }
        else{
            setTheme('light');
            localStorage.setItem("selectedTheme", 'light')
        }
    }

    useEffect(() =>{
        if(theme === 'dark')
            document.querySelector('html').setAttribute("data-theme", 'dark');
        else
            document.querySelector('html').setAttribute("data-theme", 'light');
    }, [theme])  

    return (
        <>
            <label htmlFor="darkmode-toggle" hidden> dark mode toggle</label>
            <input 
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={handleDarkMode}
                defaultChecked={theme === 'dark'}
            >   
            </input>
        </>
    )
}