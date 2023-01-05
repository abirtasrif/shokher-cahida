import React from "react";
import { Link } from "react-router-dom";

const Slide = ({ image }) => {
  return (
    <div className="slide" style={{ backgroundImage: `url(${image.src})` }}>
      <div className="slide-text container mx-auto flex flex-col items-start justify-center h-full gap-5 text-violet-50">
        <h1 className="text-8xl  font-semibold uppercase">HEADLINE</h1>
        <p className="w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nobis
          tenetur ipsa adipisci natus amet tempora repellat officia eveniet
          laborum.
        </p>
        <Link className="slide-btn uppercase border-2 border-violet-50  hover:text-orange-50 h-12 w-48 mt-5 duration-300 font-medium">
          <span className="z-[2] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full text-center">
            Browse Camera
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Slide;
