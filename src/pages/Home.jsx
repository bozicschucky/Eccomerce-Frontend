import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/data";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-3">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src={require("../images/main-banner-1.jpg")}
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>IPad S13+ Pro</h5>
                <p>From $999.00 or $41.62/mo</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src={require("../images/catbanner-01.jpg")}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>IPad S13+ Pro</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo
                  </p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src={require("../images/catbanner-02.jpg")}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy Watch</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo
                  </p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src={require("../images/catbanner-03.jpg")}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy Ipad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo
                  </p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src={require("../images/catbanner-04.jpg")}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy Headsets</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services.map((service, i) => {
                return (
                  <div className="d-flex align-items-center gap-15" index={i}>
                    <img src={service.image} alt="services" srcSet="" />
                    <div>
                      <h6>{service.title}</h6>
                      <p className="mb-0">{service.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src={require("../images/camera.jpg")} alt="camera" />
              </div>

              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src={require("../images/tv.jpg")} alt="tv" />
              </div>

              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src={require("../images/headphone.jpg")} alt="watch" />
              </div>

              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Camera</h6>
                  <p>10 Items</p>
                </div>
                <img src={require("../images/camera.jpg")} alt="camera" />
              </div>

              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src={require("../images/camera.jpg")} alt="camera" />
              </div>

              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src={require("../images/tv.jpg")} alt="camera" />
              </div>

              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src={require("../images/headphone.jpg")} alt="watch" />
              </div>

              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Camera</h6>
                  <p>10 Items</p>
                </div>
                <img src={require("../images/camera.jpg")} alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src={require("../images/black-shoes.jpg")}
                className="img-fluid famous-img"
                alt="famous"
              ></img>
              <div className="famous-content position-absolute">
                <h5>Kids Shoes</h5>
                <h6>From the best of the designers </h6>
                <p>From $300 to $800</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src={require("../images/baby-1.jpg")}
                className="img-fluid famous-img"
                alt="famous"
              ></img>
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Kids Shoes</h5>
                <h6 className="text-dark">From the best of the designers </h6>
                <p className="text-dark">From $300 to $800</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src={require("../images/baby-2.jpg")}
                className="img-fluid famous-img"
                alt="famous"
              ></img>
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Girl Shoes</h5>
                <h6 className="text-dark">From the best of the designers </h6>
                <p className="text-dark">From $10 to $20</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src={require("../images/baby-3.jpg")}
                className="img-fluid famous-img"
                alt="famous"
              ></img>
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Baby Shoes</h5>
                <h6 className="text-dark">From the best of the designers </h6>
                <p className="text-dark">From $30 to $80</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>

        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="marque-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img
                    src={require("../images/brand-01.png")}
                    alt="brand"
                  ></img>
                </div>
                <div className="mx-4 w-25">
                  <img
                    src={require("../images/brand-02.png")}
                    alt="brand"
                  ></img>
                </div>
                <div className="mx-4 w-25">
                  <img
                    src={require("../images/brand-03.png")}
                    alt="brand"
                  ></img>
                </div>
                <div className="mx-4 w-25">
                  <img
                    src={require("../images/brand-04.png")}
                    alt="brand"
                  ></img>
                </div>
                <div className="mx-4 w-25">
                  <img
                    src={require("../images/brand-05.png")}
                    alt="brand"
                  ></img>
                </div>
                <div className="mx-4 w-25">
                  <img
                    src={require("../images/brand-06.png")}
                    alt="brand"
                  ></img>
                </div>
                <div className="mx-4 w-25">
                  <img
                    src={require("../images/brand-06.png")}
                    alt="brand"
                  ></img>
                </div>
                <div className="mx-4 w-25">
                  <img
                    src={require("../images/brand-07.png")}
                    alt="brand"
                  ></img>
                </div>
                <div className="mx-4 w-25">
                  <img
                    src={require("../images/brand-08.png")}
                    alt="brand"
                  ></img>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
