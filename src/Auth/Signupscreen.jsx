import React, { Fragment, useState } from "react";
import SignInImage from "../Assets/images/Welcome 1.png";
// import AnimationImage from "../Assets/lottieFiles/9757-welcome (1).gif"
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router-dom";
import "../Styles/Signupscreen.css";
import { Link } from "react-router-dom";
import {
  setLocalStorageAsString,
  setLocalStorageForObjects,
} from "../Utils/localStorageUtils";
import { signUp } from "../Services/Auth";

export default function Signupscreen() {
  const [passwordErrToast, setPasswordErrToast] = useState(false);
  const [serverErrToast, setServerErrToast] = useState(false)

  const [signUpFormData, setSignUpFormData] = useState({
    workEmail: "",
    firstName: "",
    lastName: "",
    password: "",
    password2: "",
  });

  const { workEmail, firstName, lastName, password, password2 } =
    signUpFormData;

  const onChange = (e) =>
    setSignUpFormData({
      ...signUpFormData,
      [e.target.name]: e.target.value,
    });

  const navigate = useNavigate();

  const signUpReq = async () => {
    const reqBody = {
      firstName,
      lastName,
      email: workEmail,
      password,
      role: "AGENT",
      passwordConfirm: password2,
    };

    signUp(reqBody)
      .then((res) => {
        if (res.error)
          return setServerErrToast(true);
        if (password !== password2) return setPasswordErrToast(true);
        setLocalStorageAsString("token", "");
        setLocalStorageForObjects("user", {});
        navigate("/");
      })
      .catch(() => {
        alert("Unable to sign up, please try again later.");
      });
  };

  function getSignedIn(e) {
    e.preventDefault();
    signUpReq();
  }

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="leftSide2 col-6">
            <div className="d-flex justify-content-center mt-5">
              <img
                src={SignInImage}
                alt="loginImage"
                className="signInImg"
              />
            </div>
          </div>
          <div className="rightSide2 col-6 d-flex justify-content-center">
          {passwordErrToast ? (
                <div
                  className="errToaster bg-danger border-0 rounded"
                  role="alert"
                >
                  <div className="d-flex">
                    <div className="mx-2 text-light fs-5">
                    <i className="fa-regular fa-cloud-exclamation fa-beat-fade text-light fs-3 mx-2 fw-bold"><Icon icon="material-symbols:vpn-key-alert-outline" /></i>
                    Passwords Don't Match.
                    </div>
                    <button
                      type="button"
                      className="btn-close btn-close-white me-2 m-auto"
                      onClick={(e) => setPasswordErrToast(false)}
                    ></button>
                  </div>
                </div>
              ) : serverErrToast ? <div
              className="errToaster bg-danger border-0 rounded"
              role="alert"
            >
              <div className="d-flex">
                <div className="mx-2 text-light fs-5">
                <i className="fa-regular fa-cloud-exclamation fa-beat-fade text-light fs-4 mx-1 fw-bold"><Icon icon="mdi:database-alert-outline" /></i>
                Unable to sign up, please try again later.
                </div>
                <button
                  type="button"
                  className="btn-close btn-close-white me-2 m-auto"
                  onClick={(e) => setServerErrToast(false)}
                ></button>
              </div>
            </div> : null}
            <div className="form-container w-75 ">
              
              <form className="row g-3 mt-5 text-start" onSubmit={getSignedIn}>
                <h1 className="signUpTitle">Sign up</h1>
                <div className="col-12 mt-5">
                  <label className="form-label fw-semibold fs-5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    name="workEmail"
                    value={workEmail}
                    onChange={onChange}
                    className="form-control border border-1 border-secondary p-3"
                    id="inputAddress"
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label
                    for="inputEmail4"
                    className="form-label fw-semibold fs-5"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={onChange}
                    className="form-control border border-1 border-secondary p-3"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label
                    // for='inputPassword4'
                    className="form-label fw-semibold fs-5"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={onChange}
                    className="form-control border border-1 border-secondary p-3"
                    // id='inputPassword4'
                    placeholder="Surname"
                    required
                  />
                </div>

                <div className="col-12">
                  <label
                    for="inputAddress2"
                    className="form-label fw-semibold fs-5"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    className="form-control border border-1 border-secondary p-3"
                    // id='inputAddress2'
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="col-12">
                  <label
                    for="inputAddress2"
                    className="form-label fw-semibold fs-5"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="password2"
                    value={password2}
                    onChange={onChange}
                    className="form-control border border-1 border-secondary p-3"
                    // id='inputAddress2'
                    placeholder="Password"
                    required
                  />
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input border border-1 border-secondary"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" for="gridCheck">
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <p className="fs-5 text">
                    By signing in, you agree to the
                    <span className="links">terms an conditions</span>
                  </p>
                </div>
                <div className="col-12 d-grid">
                  <button type="submit" className="signupBtn fs-5 p-3">
                    Sign up
                  </button>
                </div>
                <div className="col-12">
                  <p className="fs-5 text">
                    Already have an account ?
                    <Link to="/" className="links">
                      Log in
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
