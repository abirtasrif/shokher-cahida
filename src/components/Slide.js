import React from "react";
import { Link } from "react-router-dom";

const Slide = ({ image }) => {
  return (
    <div className="slide" style={{ backgroundImage: `url(${image.src})` }}>
      <div className="slide-text container mx-auto flex flex-col items-start justify-center h-full gap-5 text-violet-50">
        <h1 className="text-6xl  font-semibold uppercase space-font z-[1]">
          {image.headline}
        </h1>
        <p className="w-1/2  z-[1]">{image.body}</p>
        <Link
          to={`products/${image.category}`}
          className="slide-btn border-2 uppercase border-violet-50  hover:text-orange-50 h-12 w-72 mt-5 duration-300 font-medium"
        >
          <span className="z-[2] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full text-center">
            {image.cta}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Slide;
