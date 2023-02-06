import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Cross from "../images/cross.svg";

const CompareProduct = () => {
  return (
    <>
      <Meta title="Compare Products" />
      <BreadCrumb title={"Compare Products"} />

      <div className="compare-product-wrapper py-5 home-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card">
                <div className="product-card-image position-relative">
                  <img
                    src={Cross}
                    alt="cross"
                    className="position-absolute cross"
                  />
                  <div className="product-card-image">
                    <img src={require("../images/watch-sm.jpg")} alt="watch" />
                  </div>

                  <div className="compare-product-details">
                    <h5 className="title">Kids Watch with 1GB of Ram & WIFI</h5>
                    <h6 className="price mb-3 mt-3">$100</h6>

                    <div className="">
                      <div className="product-detail">
                        <h5>Brand</h5>
                        <p>Mavels</p>
                      </div>
                      <div className="product-detail">
                        <h5>Type</h5>
                        <p>Watch</p>
                      </div>
                      <div className="product-detail">
                        <h5>Availability</h5>
                        <p>In Stock</p>
                      </div>
                      <div className="product-detail">
                        <h5>Colors</h5>
                        <Color />
                      </div>
                      <div className="product-detail">
                        <h5>Size</h5>
                        <div className="d-flex gap-10">
                          <p>S</p>
                          <p>M</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="compare-product-card">
                <div className="product-card-image position-relative">
                  <img
                    src={Cross}
                    alt="cross"
                    className="position-absolute cross"
                  />
                  <div className="product-card-image">
                    <img src={require("../images/watch-sm.jpg")} alt="watch" />
                  </div>

                  <div className="compare-product-details">
                    <h5 className="title">Kids Watch with 1GB of Ram & WIFI</h5>
                    <h6 className="price mb-3 mt-3">$100</h6>

                    <div className="">
                      <div className="product-detail">
                        <h5>Brand</h5>
                        <p>Mavels</p>
                      </div>
                      <div className="product-detail">
                        <h5>Type</h5>
                        <p>Watch</p>
                      </div>
                      <div className="product-detail">
                        <h5>Availability</h5>
                        <p>In Stock</p>
                      </div>
                      <div className="product-detail">
                        <h5>Colors</h5>
                        <Color />
                      </div>
                      <div className="product-detail">
                        <h5>Size</h5>
                        <div className="d-flex gap-10">
                          <p>S</p>
                          <p>M</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;
