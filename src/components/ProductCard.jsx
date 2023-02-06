import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import ProductCompare from "../images/prodcompare.svg";
import AddToCart from "../images/add-cart.svg";
import View from "../images/view.svg";
import Wishlist from "../images/wish.svg";

const ProductCard = ({ grid }) => {
  const location = useLocation();
  return (
    <>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : " col-3"
        }`}
      >
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={Wishlist} alt="wishlist"></img>
            </button>
          </div>
          <div className="product-image">
            <img
              src={require("../images/watch-1.jpg")}
              className="img-fluid img-height"
              alt="product image"
            />
            <img
              src={require("../images/watch.jpg")}
              className="img-fluid img-height"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Watches</h6>
            <h5 className="product-title">
              Kids Headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              edit={false}
              value={3}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              excepturi quidem blanditiis rerum nulla, quia soluta suscipit quas
              nobis earum voluptas molestias beatae voluptatem ad, quisquam
              reprehenderit sunt nesciunt quibusdam enim dignissimos
              consequuntur voluptatibus omnis! Itaque velit veniam, quibusdam
              excepturi, voluptatem repudiandae laudantium maxime magni est
              perferendis voluptatibus nisi sed.
            </p>
            <p className="price">$100.00</p>
          </div>

          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src={AddToCart} alt="add-cart" />
              </Link>
              <Link>
                <img src={ProductCompare} alt="prodcompare" />
              </Link>
              <Link>
                <img src={View} alt="view" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
