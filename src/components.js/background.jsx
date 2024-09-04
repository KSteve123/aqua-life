import React from "react"
import bg from '../assets/bg.mp4'

const Bg = () => {
    return(
        <div className='background'>
            <video src={bg} autoPlay loop muted/>
        </div>
    )

}

export default Bg
