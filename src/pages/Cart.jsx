import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Meta title="Cart" />
      <BreadCrumb title={"Cart"} />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header d-flex py-3 justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="card-data py-3 mb-2 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      src={require("../images/watch-sm.jpg")}
                      className="img-fluid w-auto"
                      alt="cart-image"
                    />
                  </div>
                  <div className="w-75">
                    <p>ProdXxxl</p>
                    <p>black</p>
                    <p>xxl</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <div className="cart-price">$100</div>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      type="number"
                      name=""
                      id=""
                      min={1}
                      max={30}
                      className="form-control"
                    />
                  </div>
                  <div className="text-danger p-3">
                    <AiFillDelete />
                  </div>
                </div>
                <div className="cart-col-4">
                  <div className="cart-price">$100</div>
                </div>
              </div>
            </div>

            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between">
                <div className="btn-container">
                  <Link to="/product" className="button">
                    Continue To Shopping
                  </Link>
                </div>

                <div className="d-flex flex-column align-items-end">
                  <h4>SubTotal: $100</h4>
                  <p>Taxes and Shipping Calculated at checkout</p>
                  <Link to="/checkout" className="button">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
