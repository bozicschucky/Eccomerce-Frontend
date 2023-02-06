import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import CustomInput from "../components/CustomInput";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact us"} />
      <BreadCrumb title="Contact" />

      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5005.052334344025!2d32.634660706535776!3d0.3085580204203737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db9291bfa2d65%3A0x59db870725a2a432!2sSails%20Restaurant%20and%20Wine%20Boutique!5e0!3m2!1sen!2sug!4v1674718505611!5m2!1sen!2sug"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact Us</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <CustomInput
                        type="text"
                        name="text"
                        className="form-control"
                        placeholder="name"
                      />
                    </div>
                    <div>
                      <CustomInput
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <CustomInput
                        type="tel"
                        name="mobile"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <label for="contact-text-area" class="form-label"></label>
                      <textarea
                        class="form-control w-100"
                        name=""
                        id="contact-text-area"
                        rows="8"
                        cols="5"
                        placeholder="Comments"
                      ></textarea>
                    </div>

                    <div className="btn-container">
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div className="get-in-touch-container">
                  <h3 className="contact-title mb-4">Get in touch with us</h3>

                  <div className="information">
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">
                          1 Plot 833 PortBell Road, opposite Total Kitintale in,
                          Kampala
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel:+25678212345">25678212345</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:test@gmail.com">test@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="fs-5" />
                        <p className="mb-0">Mon-Sat ,9am - 9pm</p>
                      </li>
                    </ul>
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

export default Contact;
