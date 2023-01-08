import React from "react";
import { useNavigate } from "react-router-dom";
import { currencyFormatter } from "../utilities/currencyFormatter";

const Card = ({ product }) => {
  const navigate = useNavigate();

  const addToCartHandler = (id) => {
    navigate("/cart");
  };

  return (
    <div className="product flex flex-col gap-2 shadow-md bg-white rounded-xl overflow-hidden hover:shadow-2xl duration-300">
      <div className="img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="texts flex flex-col gap-2 px-5 pb-5">
        <span className="category-tag uppercase text-xs font-semibold tracking-widest text-teal-500">
          {product.category}
        </span>
        <h3 className="title font-medium text-xl h-[5.25rem]">
          {product.name}
        </h3>
        <p className="details text-gray-500 h-[5.5rem]">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="price text-xl font-medium text-rose-500">
            {currencyFormatter(product.price)}
          </span>
          <button
            onClick={() => addToCartHandler(product.id)}
            className="uppercase bg-violet-500 text-violet-50 font-medium py-3 px-6 rounded-md hover:bg-orange-500 hover:text-orange-50 duration-300 shadow-md shadow-violet-300 hover:shadow-orange-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
