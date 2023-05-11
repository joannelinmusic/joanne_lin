import React from "react";
import photo1 from "../assets/DSC_0067.png";
import photo2 from "../assets/DSC_0094.jpg";
import photo3 from "../assets/DSC_0005.jpg";
import photo4 from "../assets/DSC_0015.jpg";
import photo5 from "../assets/P5090143.jpg";
import photo6 from "../assets/P5090076.jpg";
import photo7 from "../assets/P5090096.jpg";
import photo8 from "../assets/P5090276.jpg";

import "../pages/Gallery.css";

export default function Gallery() {
    return (
        <div className="gallery-container">
            <div className="image-container">
                <div className="gallery-row-left">
                    <img src={photo1} className="picture" alt="" />
                    <img src={photo3} className="picture" alt="" />
                    <img src={photo5} className="picture" alt="" />
                    <img src={photo7} className="picture" alt="" />
                    
                </div>
                <div className="gallery-row-right">
                    <img src={photo2} className="picture" alt="" />
                    <img src={photo4} className="picture" alt="" />
                    <img src={photo6} className="picture" alt="" />
                    <img src={photo8} className="picture" alt="" />
                    
                </div> 
            </div>
                <div className="credits">
                    <div className="bio-text">
                        Jeffrey Hsueh
                        <br/><br/>
                        Michael Yu
                        <br/><br/>
                        Uno Huang
                    </div>
                </div>

        </div>
    );
}
