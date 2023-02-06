import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import CustomInput from "../components/CustomInput";

const ForgotPassword = () => {
  return (
    <div>
      <Meta title="Forgot Password" />
      <BreadCrumb title={"Forgot Password"} />

      <div className="login-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 align-center">
              <div className="auth-card ">
                <h3 className="text-center mb-3">Reset Password</h3>
                <p className="text-center">
                  We will send You an Email to reset your password
                </p>
                <form action="" className="d-flex flex-column gap-15">
                  <div className="">
                    <CustomInput
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>

                  <div>
                    <div className="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                      <button className="button login border-0" type="submit">
                        Submit
                      </button>
                      <Link to="/login">Cancel</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
