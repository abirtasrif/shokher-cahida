import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import Slide from "./Slide";

const data = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1787236/pexels-photo-1787236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "DSLR Cameras for Sale",
    body: "Find the perfect DSLR camera for your needs at our online store. We offer a range of brands and features to choose from. Shop now and elevate your photography skills.",
    cta: "Shop dslr cameras now !",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Upgrade Your Viewing Experience",
    body: "Get the latest and greatest in home entertainment with our selection of smart TVs. Stream your favorite movies, shows, and apps with ease, and control your TV with the touch of a button. Shop now and elevate your living room setup.",
    cta: "Shop Smart TVs Now",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Experience Unmatched Sound Quality",
    body: "Take your music and calls to the next level with our selection of wireless headphones. Enjoy a seamless connection and crystal clear sound, without the hassle of tangled cords. Shop now and take your audio experience to new heights.",
    cta: "Shop Wireless Headphones",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Level Up Your Gaming Experience",
    body: "Get the ultimate gaming experience with our selection of game consoles. From the latest and greatest to classic throwbacks, we've got you covered. Shop now and join the ranks of the elite gamers.",
    cta: "Shop Game Consoles Now",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Stay Connected with Our Smartwatches",
    body: "Get the most out of your daily routine with our selection of smartwatches. Stay connected, track your fitness, and elevate your style with these sleek and functional devices. Shop now and take control of your day.",
    cta: "Shop Smartwatches Now",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };

  return (
    <div className="frame relative">
      <div
        className="slider"
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((image) => (
          <Slide key={image.id} image={image} />
        ))}
      </div>
      <div className="btns absolute left-0 right-0 bottom-20 m-auto w-fit z-[1] text-violet-50 text-2xl flex gap-10">
        <button
          onClick={prevSlide}
          className="prev-btn h-14 w-20 bg-violet-900/40 backdrop-blur-xl flex justify-center items-center hover:bg-violet-200/70 hover:text-violet-900 duration-300"
        >
          <span>
            <BsArrowLeft />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="next-btn h-14 w-20 bg-violet-900/40 backdrop-blur-xl flex justify-center items-center hover:bg-violet-200/70 hover:text-violet-900 duration-300"
        >
          <span>
            <BsArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
