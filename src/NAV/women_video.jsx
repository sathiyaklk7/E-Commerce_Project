import React from "react";
import FemaleVideo from "../Reactprojectvideo/female_video.webm"
export default function Female_Video (){
    return(
        <div className="menbgvideo">
            <div>
                <video className="menpagevideo" src={FemaleVideo} autoPlay loop />
            </div>
        </div>
    )

}
