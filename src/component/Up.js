"use client"
import { CircleArrowUp } from "lucide-react";

const Up = () => {
    const handleUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return(
        <button onClick={handleUp} className="p-4 rounded animate-bounce">
        <CircleArrowUp />    
        </button>
    )
}
export default Up;