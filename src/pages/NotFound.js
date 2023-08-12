import React from "react";
import "../styles/NotFound.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
  return (
    <>
      <div className="not-found">
        <img
          src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
          alt="not-found"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Link to="/" className="link-home">
          Go Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
