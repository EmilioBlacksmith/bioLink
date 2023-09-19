import { useEffect, useState } from 'react'

export function DarkModeToggle(){
    const [theme, setTheme] = useState('light');

    useEffect(() =>{
        if(theme === 'dark')
        document.querySelector('html').classList.add('dark');
        else
        document.querySelector('html').classList.remove('dark');
    }, [theme])

    const handleDarkMode = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    }

    return (
        <>
        <button onClick={handleDarkMode} className='bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 dark:hover:text-white text-black dark:bg:bg-slate-950
     dark:hover:bg-slate-900'>Change Theme</button>
        </>
    )
}