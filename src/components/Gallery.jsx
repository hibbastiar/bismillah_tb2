import React from "react";
import './Gallery.css';

const Gallery = () => {
    return (
      <div classname="body-gallery">
        <img className="banner-gallery" src={require("../Gallery/Gallery-Banner.png")} alt="Banner" />
        <div className="gallery-container">
          <div className="gallery">
            <div className="column">
              <img src={require("../Gallery/Gallery-Art1.png")} alt="Art 1" />
            </div>
            <div className="column">
              <img src={require("../Gallery/Gallery-Art2.png")} alt="Art 2" />
            </div>
            <div className="column">
              <img src={require("../Gallery/Gallery-Art3.png")} alt="Art 3" />
            </div>
          </div>
          <div className="gallery">
            <div className="column">
              <img src={require("../Gallery/Gallery-Art4.png")} alt="Art 4" />
            </div>
            <div className="column">
              <img src={require("../Gallery/Gallery-Art5.png")} alt="Art 5" />
            </div>
            <div className="column">
              <img src={require("../Gallery/Gallery-Art6.png")} alt="Art 6" />
            </div>
          </div>
          <div className="gallery">
            <div className="column">
              <img src={require("../Gallery/Gallery-Art7.png")} alt="Art 7" />
            </div>
            <div className="column">
              <img src={require("../Gallery/Gallery-Art8.png")} alt="Art 8" />
            </div>
            <div className="column">
              <img src={require("../Gallery/Gallery-Art9.png")} alt="Art 9" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Gallery;