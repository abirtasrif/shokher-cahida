import React from "react";
import { Link } from "react-router-dom";

const Slide = ({ image }) => {
  return (
    <div className="slide" style={{ backgroundImage: `url(${image.src})` }}>
      <div className="slide-text container mx-auto flex flex-col items-start justify-center h-full gap-5 text-violet-50">
        <h1 className="text-6xl  font-semibold uppercase">DSLR Cameras for Sale</h1>
        <p className="w-1/2">
        Find the perfect DSLR camera for your needs at our online store. We offer a range of brands and features to choose from. Shop now and elevate your photography skills.
        </p>
        <Link className="slide-btn border-2 uppercase border-violet-50  hover:text-orange-50 h-12 w-64 mt-5 duration-300 font-medium">
          <span className="z-[2] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full text-center">
            Shop dslr cameras now !
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Slide;
