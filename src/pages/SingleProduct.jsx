import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import BreadCrumb from "../components/BreadCrumb";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";

const SingleProduct = () => {
  const props = {
    width: 400,
    height: 500,
    zoomWidth: 500,
    img: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    className: "img-container",
  };
  const [orderedProduct, setOrderedProduct] = useState(true);

  const copyToClipboard = (text) => {
    const textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <>
      <Meta title="Product Name" />
      <BreadCrumb title="Product Name" />

      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div className="img-container">
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="images"
                    srcSet=""
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="images"
                    srcset=""
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="images"
                    srcset=""
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="images"
                    srcset=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">Kids Watches That have style</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$100</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      edit={false}
                      value={3}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 reviews"> (2 reviews)</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type</h3>:
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand</h3>:
                    <p className="product-data">Casio</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category</h3>:
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags</h3>:
                    <p className="product-data">Watches</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availability</h3>:
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 my-3">
                    <h3 className="product-heading">Size</h3>:
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border-1 bg-white text-dark border border-secondary">
                        S
                      </span>
                      <span className="badge border-1 bg-white text-dark border border-secondary">
                        M
                      </span>
                      <span className="badge border-1 bg-white text-dark border border-secondary">
                        XL
                      </span>
                      <span className="badge border-1 bg-white text-dark border border-secondary">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="product-heading">Color</h3>:
                    <Color />
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="product-heading">Quantity</h3>:
                    <div className="">
                      <input
                        type="number"
                        name=""
                        style={{ width: "70px" }}
                        className="form-control"
                        min={1}
                        max={10}
                        id=""
                      />
                    </div>
                    <div className="d-flex justify-content-center gap-15 align-items-center">
                      <button className="button login border-0" type="submit">
                        ADD TO CART
                      </button>
                      <button className="button signup">BUY IT NOW</button>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="" className="text-dark">
                        <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                      </a>
                    </div>
                    <div>
                      <a href="" className="text-dark">
                        <TbGitCompare className="fs-5 me-2" /> Add to Compare
                      </a>
                    </div>
                  </div>

                  <div className="d-flex flex-column gap-10 align-items-start my-2">
                    <h3 className="product-heading">Shipping & Returns :</h3>
                    <p className="product-data">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Cumque aliquid nesciunt vero vel voluptates numquam et ex.
                      Obcaecati dolor mollitia reprehenderit, exercitationem
                      maxime recusandae doloribus culpa ad commodi dolorum?
                      Inventore.
                    </p>
                  </div>

                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Copy Product Link:</h3>
                    <a
                      href="javascript:void(0);"
                      type="button"
                      onClick={() => copyToClipboard("some random stuff")}
                      className="product-data"
                    >
                      Copy Product Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4 className="description">Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  id nesciunt, rem officiis, ab harum aut quas nisi velit et vel
                  explicabo sunt? Nobis doloremque consectetur ullam saepe.
                  Veniam, quas. Ea voluptate eos nemo quibusdam dolor eligendi
                  facilis odio, doloremque animi dolorum dolores ex adipisci qui
                  in voluptatem rem veniam, at magni rerum exercitationem
                  ducimus assumenda consequuntur voluptates soluta? Facere!
                  Atque officia veritatis, nesciunt reprehenderit nostrum
                  molestiae iusto voluptatibus possimus dolorem exercitationem
                  quaerat sint quidem eaque saepe quisquam id dolor dolorum
                  nihil placeat facere! Eius voluptates sequi adipisci ea error!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="review-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3>Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value={3}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 reviews</p>
                    </div>
                  </div>

                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href=""
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>

                <div id="review" className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        edit={true}
                        value={3}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div class="">
                      <textarea
                        class="form-control"
                        name=""
                        id=""
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>

                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h5 className="mb-0">Chucky Jones</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value={3}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe recusandae expedita doloremque! Ipsum sed laborum
                      voluptas similique corporis quas soluta ex deleniti iste
                      vel libero ad consequuntur, excepturi sit quibusdam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
