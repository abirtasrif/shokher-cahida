import React from "react";
import { NavLink } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi2";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="navbar-bg bg-violet-700 text-violet-50 h-20 flex justify-center items-center">
      <div className="navbar container mx-auto flex items-center justify-between">
        <div className="text-2xl font-semibold">
          <span className="logo">
            শখের <span className="text-orange-500">চাহিদা</span>
          </span>
        </div>
        <div className="right flex items-center gap-5">
          <NavLink to="/" className="duration-300 nav-link">
            Home
          </NavLink>
          <NavLink to="/products" className="duration-300 nav-link">
            Products
          </NavLink>
          <NavLink to="/cart">
            <span className="cart-icon relative">
              <HiShoppingCart />
              <span className="cart-counter absolute -top-2 -right-3 text-xs bg-orange-600 h-4 w-4 rounded-full flex items-center justify-center font-medium z-[1]">
                {cartItems.length}
              </span>
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
