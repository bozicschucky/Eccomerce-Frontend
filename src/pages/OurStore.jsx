import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import gr from "../images/gr.svg";
import gr2 from "../images/gr2.svg";
import gr3 from "../images/gr3.svg";
import gr4 from "../images/gr4.svg";

const OurStore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title={"Our Store"} />

      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div className="filter-card">
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div className="">
                  <h5 className="sub-title">Availability</h5>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      In Stock (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Out of Stock (0)
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Price</h5>

                <div className="d-flex align-items-center gap-10">
                  <div class="form-floating">
                    <input
                      type="text"
                      className="form-control py-1"
                      name="floatingInput"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>

                  <div class="form-floating">
                    <input
                      type="text"
                      className="form-control py-1"
                      name="floatingInput1"
                      id="floatingInput1"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput1">To</label>
                  </div>
                </div>

                <h5 className="sub-title">Colors</h5>
                <div>
                  <Color />
                </div>
                <h5 className="sub-title">Size</h5>
                <div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      value=""
                      className="form-check-input"
                      id="color-1"
                      placeholder=""
                    />
                    <label htmlFor="color-1">S (2)</label>
                  </div>

                  <div class="form-check">
                    <input
                      type="checkbox"
                      value=""
                      className="form-check-input"
                      id="color-2"
                      placeholder=""
                    />
                    <label htmlFor="color-2">M (2)</label>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphones
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Phones
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Tablets
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Computers
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Fashion
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Products</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src={require("../images/watch.jpg")}
                        className="img-fluid"
                        alt="watch "
                      ></img>
                    </div>
                    <div className="w-50">
                      <h6>
                        Kids Headphones bulk 10 pack multi colored for students
                      </h6>
                      <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value={3}
                        activeColor="#ffd700"
                      />
                      <b>$300</b>
                    </div>
                  </div>

                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src={require("../images/watch.jpg")}
                        className="img-fluid"
                        alt="watch "
                      ></img>
                    </div>
                    <div className="w-50">
                      <h6>
                        Kids Headphones bulk 10 pack multi colored for students
                      </h6>
                      <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value={3}
                        activeColor="#ffd700"
                      />
                      <b>$300</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d--block sort-by-title">Sort By:</p>
                    <select className="form-control form-select" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">
                        Best selling
                      </option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-ascending">
                        Price, low to high
                      </option>
                      <option value="price-descending">
                        Price, high to low
                      </option>
                      <option value="date-ascending">Date, high to low</option>
                      <option value="date-descending">Date, low to high</option>
                    </select>
                  </div>

                  <div className="d-flex align-items-center gap-10">
                    <p className="total-products mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src={gr4}
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src={gr3}
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src={gr2}
                        className="d-block img-fluid"
                        alt="grid"
                      />

                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src={gr}
                        className="d-block img-fluid"
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="products-list mt-3 pb-5">
                <div className="d-flex flex-wrap gap-10">
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
