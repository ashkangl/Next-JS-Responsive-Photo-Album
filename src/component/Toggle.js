"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunMoon , Sun } from "lucide-react"

const Toggle = () => {

    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState();

    useEffect(()=>{
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme){
            setTheme(savedTheme)
        }
        setMounted(true)
    },[])

    if (!mounted) return null;

    const handleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }
    return(
        <button className="mb-8" onClick={handleTheme} suppressHydrationWarning={true}>{theme === 'light' ? <SunMoon /> : <Sun />}</button>
    )
}

export default Toggle;