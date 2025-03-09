import React from "react";
import "./details.css";

const Details = () => {
  return (
    <div className="details">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h3>David Bragg</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="option">
        <div className="title">

        <span>Chat Settings</span>
        <img src="./arrowUp.png" alt="" />
        </div>
      </div>

      <div className="option">
        <div className="title">

        <span>Privacy & Help</span>
        <img src="./arrowUp.png" alt="" />
        </div>
      </div>

      <div className="option">
        <div className="title">
          <span>Shared Photos</span>
          <img src="./arrowDown.png" alt="" />
        </div>
        <div className="photos">
          <div className="photoItem">
            <div className="photoDetail">
              <img
                src="https://pixelcorner.fr/cdn/shop/articles/le-nyan-cat-618805.webp?v=1710261022&width=2048"
                alt=""
              />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>
          <div className="photoItem">
            <div className="photoDetail">
              <img
                src="https://pixelcorner.fr/cdn/shop/articles/le-nyan-cat-618805.webp?v=1710261022&width=2048"
                alt=""
              />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>

        </div>
      </div>
      <div className="option">
        <div className="title">
        <span>Shared Files</span>
        <img src="./arrowUp.png" alt="" />
        </div>
      </div>
      <button className="block">Block</button>
    </div>
  );
};

export default Details;
