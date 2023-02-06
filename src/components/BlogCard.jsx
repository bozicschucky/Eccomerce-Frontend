import React from "react";
import { Link } from "react-router-dom";

function BlogCard() {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img
          className="img-fluid"
          src={require("../images/blog-1.jpg")}
          alt="blog"
        />
      </div>

      <div className="blog-content">
        <p className="date">1 Dec, 2021</p>
        <h5 className="title">How to Order Products</h5>
        <p className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
          distinctio culpa voluptate quia facilis?
        </p>
        <Link to="/blogs/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
