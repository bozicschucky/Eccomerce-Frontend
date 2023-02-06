import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";

const ResetPassword = () => {
  return (
    <>
      <Meta title="Reset Password" />
      <BreadCrumb title={"Reset Password"} />
      <div className="login-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 align-center">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Password</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div className="mt-1">
                    <CustomInput
                      type="password"
                      name="Password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                  <div className="mt-1">
                    <CustomInput
                      type="password"
                      name="confPassword"
                      placeholder="Confirm password"
                      className="form-control"
                    />
                  </div>

                  <div>
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button className="button login border-0" type="submit">
                        Ok
                      </button>
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

export default ResetPassword;
