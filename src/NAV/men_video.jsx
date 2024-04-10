import React from "react";
import Menvideo from "../Reactprojectvideo/men_video.webm"
export default function menvideo (){
    return(
        <div className="menbgvideo">
            <div >
                <video className="menpagevideo" src={Menvideo} autoPlay loop />
                </div>
        </div>
    )
}
