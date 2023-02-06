import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

export const CheckOut = () => {
  return (
    <div>
      <Meta title="Check Out" />
      <BreadCrumb title={"Check Out"} />
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">Baby&Mom</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/cart" className="check-out-title text-dark">
                        Cart
                      </Link>
                    </li>
                    &nbsp; /
                    <li
                      class="breadcrumb-item check-out-title active"
                      aria-current="page"
                    >
                      Information
                    </li>
                    &nbsp; /
                    <li
                      class="breadcrumb-item check-out-title"
                      aria-current="page"
                    >
                      Shipping
                    </li>
                    &nbsp; /
                    <li
                      class="breadcrumb-item check-out-title"
                      aria-current="page"
                    >
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title">Contact Information</h4>
                <p className="user-details title">chuck (chucky@hotmail.com)</p>

                <form
                  action=""
                  className="d-flex gap-15 flex-wrap justify-content-between"
                >
                  <div class="w-100">
                    <select class="from-control form-select" name="" id="">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Apartment, Suite,"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="city"
                      className="form-control"
                    />
                  </div>

                  <div className="flex-grow-1">
                    <select class="from-control form-select" name="" id="">
                      <option value="" selected disabled>
                        Select State
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Zip code"
                      className="form-control"
                    />
                  </div>

                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark">
                        <BiArrowBack className="me-2" />
                        Return to Cart
                      </Link>
                      <Link to="/cart" className="button">
                        Continue to Shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex gap-10 mb-2 align-items-center">
                  <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative">
                      <span
                        style={{ top: "-10px", right: "2px" }}
                        className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                      >
                        1
                      </span>
                      <img
                        src={require("../images/watch-sm.jpg")}
                        className="img-fluid"
                        alt="product-image"
                      />
                    </div>
                    <div>
                      <h5 className="check-out-title">Kids Watch</h5>
                      <p className="check-out-title">s / as sjjacs</p>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="total">$100</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center align-nav-item">
                  <p className="total">SubTotal</p>
                  <p className="total-price">$1000</p>
                </div>
                <div className="d-flex justify-content-between align-items-center align-nav-item">
                  <p className="mb-0 total">Shipping</p>
                  <p className="mb-0 total-price">$1000</p>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                <h4 className="total">Total</h4>
                <h4 className="total-price">$1000</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
