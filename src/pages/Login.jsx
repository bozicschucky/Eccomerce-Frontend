import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import CustomInput from "../components/CustomInput";

const Login = () => {
  return (
    <>
      <Meta title="Log In" />
      <BreadCrumb title={"Log In"} />

      <div className="login-wrapper home-wrapper-2 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 align-center">
              <div className="auth-card">
                <h3 className="text-center mb-3">Login</h3>
                <form action="" className="d-flex flex-column gap-5">
                  <CustomInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />

                  <CustomInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />

                  <div>
                    <Link to="/forgot-password">Forgot Password</Link>
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button className="button login border-0" type="submit">
                        Login
                      </button>
                      <Link to="/signup" className="button signup">
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
