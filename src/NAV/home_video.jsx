import React from "react";
import homevideo from "../Reactprojectvideo/Homepage_video-1.mp4"
function video (){
    return(
        <div className="bgvideo">
            <div >
                <video className="homepagevideo" src={homevideo} autoPlay loop />
                </div>
        </div>
    )
}
export default video