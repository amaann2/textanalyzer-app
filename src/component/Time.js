import React, { useEffect, useState } from 'react'

const Time = (props) => {

    setInterval(changetime, 1000)
    let now = new Date().toLocaleTimeString();

    const [time, setTime] = useState(now)
    const [width, setWidth] = useState(window.screen.width)

    function changetime() {
        let timee = new Date().toLocaleTimeString();
        setTime(timee)
    }
    const actualwidth=()=>{
        setWidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener("resize",actualwidth)
        return ()=>{
        window.removeEventListener("resize",actualwidth)

        }
    })

    return (
        <div className='container'>
            {/* to print the time  */}
            <h1 style={{ color: props.mode === "light" ? "black" : "blue" }}>{time}</h1>
            <button className='btn-success' onClick={changetime}>Get Time</button>
            <h1>width of my computer</h1>
           <h1>{width}</h1>
        </div>
    )
}

export default Time