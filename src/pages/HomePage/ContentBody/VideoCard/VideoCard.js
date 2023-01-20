import React, { useState } from "react";
import ImageContainer from "../../../../utils/components/ImageContainer";
import "./VideoCard.css";

const VideoCard = () => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div
            className="card"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="card-inner">
                {isHovering ? <video
                    className={`video ${isHovering ? "" : "hidden"}`}
                    src="https://freetestdata.com/wp-content/uploads/2022/02/Free_Test_Data_10MB_MP4.mp4"
                    controls
                /> : <ImageContainer imageStyle={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }} imagePath="resting_cat.jpg"></ImageContainer>}
            </div>
        </div>
    );
};

export { VideoCard };