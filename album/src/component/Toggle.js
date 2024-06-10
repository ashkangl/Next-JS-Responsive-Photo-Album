"use client"
const Toggle = () => {

    const handleDark = () => {
        document.body.className = "dark"
    }

    const handleLight = () => {
        document.body.className = "light"
    }

    return(
        <div className="md:w-[20%] w-[60%] justify-between flex rounded-full">
            <div>
            <input type="radio" id="light" name="theme" value="light" defaultChecked={true} onChange={handleLight} />
            <label className="light:text-slate-900 dark:text-white" for="html">Light</label>
            </div>

            <div>
            <input type="radio" id="dark" name="theme" value="dark" onChange={handleDark} />
            <label className="light:text-slate-900 dark:text-white" for="css">Dark</label>
            </div>
        </div>
    )
}

export default Toggle;