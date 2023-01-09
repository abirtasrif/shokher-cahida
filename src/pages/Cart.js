import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  clearCart,
  decreaseCart,
  addToCart,
} from "../features/products/cartSlice";
import { currencyFormatter } from "../utilities/currencyFormatter";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems: data, cartTotalAmount: subtotal } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleDecrease = (product) => {
    dispatch(decreaseCart(product));
  };

  const handleIncrease = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="cart-section py-10 mx-auto">
      <h2 className="section-title uppercase text-2xl font-bold space-font mb-10 text-center">
        {data.length > 0
          ? `Your Cart with ${data.length} item${data.length > 1 ? "s" : ""}`
          : "Your Cart is Empty"}
      </h2>

      <div className="text-center">
        {data.length === 0 && (
          <Link
            to="/Products"
            className="text-center text-sky-500 cursor-pointer inline-block"
          >
            Start Shopping Now
          </Link>
        )}
      </div>

      {data.length > 0 && (
        <>
          <div className="cart-container container mx-auto py-10">
            <div className="product-headlines grid grid-cols-5 gap-10 border-b pb-3 font-semibold">
              <div className="col-product col-span-2">Product</div>
              <div className="col-unit-price">Unit Price</div>
              <div className="col-quantity">Quantity</div>
              <div className="col-total-price ml-auto">Total Price</div>
            </div>
            <div className="products flex flex-col gap-5">
              {data.map((product) => (
                <div className="product grid grid-cols-5 gap-10 mt-5 border-b pb-5">
                  <div className="left flex col-span-2 gap-5">
                    <img
                      src={product.image}
                      alt={product.left}
                      className="h-32 w-32 object-cover"
                    />
                    <div className="details flex flex-col gap-3 items-start">
                      <span>{product.name}</span>
                      <button
                        className="uppercase font-medium text-gray-400 hover:text-rose-500 duration-300"
                        onClick={() => handleRemove(product)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="unit-price">
                    {currencyFormatter(product.price)}
                  </div>
                  <div className="counter flex">
                    <button
                      onClick={() => handleDecrease(product)}
                      className="h-10 w-10 bg-gray-100 border-gray-200 border-2 active:bg-gray-700 active:text-gray-50"
                    >
                      -
                    </button>
                    <span className="h-10 w-10 bg-gray-100 flex items-center justify-center border-gray-200 border-2">
                      {product.cartQuantity}
                    </span>
                    <button
                      onClick={() => handleIncrease(product)}
                      className="h-10 w-10 bg-gray-100 border-gray-200 border-2 active:bg-gray-700 active:text-gray-50"
                    >
                      +
                    </button>
                  </div>
                  <div className="total-price ml-auto">
                    {currencyFormatter(product.price * product.cartQuantity)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cart-lower flex justify-between items-start py-8 container mx-auto">
            <button
              onClick={() => dispatch(clearCart())}
              className="clear-button uppercase border py-3 px-8 hover:bg-rose-200 hover:text-rose-600 font-medium hover:border-rose-200 duration-300"
            >
              Clear Cart
            </button>
            <div className="flex flex-col items-start gap-3">
              <div className="top flex justify-between w-full text-2xl font-medium">
                <span className="text-sky-500">Subtotal</span>
                <span className="text-rose-500">
                  {currencyFormatter(subtotal)}
                </span>
              </div>
              <p className="text-gray-400">
                Taxes & shipping costs are calculated at the checkout
              </p>
              <Link className="checkout bg-sky-500 w-full py-3 uppercase font-medium text-sky-50 tracking-widest hover:bg-sky-600 duration-300">
                Checkout
              </Link>
              <Link
                to="/Products"
                className="continue uppercase text-sky-500 font-medium"
              >
                👈 Continue Shopping
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
