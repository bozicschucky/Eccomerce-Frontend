import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Meta from "../components/Meta";

const SingleBlog = () => {
  return (
    <>
      <Meta title="Dynamic Blog Name" />
      <BreadCrumb title={"Dynamic Blog Name"} />

      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft /> Go back to Blogs
              </Link>
              <h3 className="title">A beautiful Shopping bonaza</h3>
              <img
                src="images/watch-1.jpg"
                className="img-fluid w-100 my-4"
                alt="blog-img"
              />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                totam quod nesciunt dicta animi ad fugit! Dicta eius
                perspiciatis dolores at corrupti delectus et ut inventore
                soluta? Fuga, asperiores consequuntur! Eos fugiat culpa vel
                odit? Soluta, exercitationem. Veniam ex expedita id laborum
                adipisci modi placeat eum quisquam! Atque, assumenda quidem
                ullam accusamus velit odit aut ipsa cum iure nostrum
                voluptatibus. Similique in illum maxime impedit, debitis facilis
                sequi vitae veritatis possimus. Quos sed commodi illum provident
                magnam esse voluptate debitis porro, consequatur nostrum quia
                quam quibusdam ut. Repellat, id quia. Fugiat quod esse quasi
                nesciunt placeat nihil animi soluta ratione assumenda voluptas
                dolore, nulla rem dignissimos. Sequi debitis pariatur quas
                officia, provident accusantium rem! Molestias amet quas nostrum
                voluptates corporis! Expedita quae quibusdam deleniti sequi hic.
                Qui, maxime quam. Illo doloremque adipisci quisquam deleniti
                illum nesciunt dolorum nostrum enim aliquid dignissimos quas,
                suscipit minima laudantium. Veritatis soluta eveniet nam natus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
