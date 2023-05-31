import React from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitCustomer = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        // `http://localhost:3003/seller/auth/login`,
        `https://blanja-be-production.up.railway.app/customer/auth/login`,
        {
          email,
          password,
        }
      );

      if (response.data.status === "success") {
        Swal({
          title: "Login Success",
          text: `Your account Success Login`,
          icon: "success",
        });
        const token = response.data.data.token;
        const role = response.data.data.role;
        console.log(role);
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);

        // localStorage.setItem('token', response.data.data.token);
        // if (localStorage.getItem('token')) {
        //     Swal({
        //         title: "Login Success",
        //         text: `Your account Success Login`,
        //         icon: "success",
        //         });
        navigate("/");
        // window.location.reload();
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleSubmitSeller = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3003/seller/auth/login`,
        // `http://localhost:3003/customer/auth/login`,
        {
          email,
          password,
        }
      );

      if (response.data.status === "success") {
        Swal({
          title: "Login Success",
          text: `Your account Success Login`,
          icon: "success",
        });
        const token = response.data.data.token;
        const role = response.data.data.role;
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);

        // localStorage.setItem('token', response.data.data.token);
        // if (localStorage.getItem('token')) {
        //     Swal({
        //         title: "Login Success",
        //         text: `Your account Success Login`,
        //         icon: "success",
        //         });
        navigate("/");
        // window.location.reload();
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-10 col-xxl-12 col-lg-12 col-md-12 col-sm-12 text-center mb-2">
          <div className="logo-brand">
            <img
              src={require("../../assets/img/Vector.png")}
              alt="logo-brand"
            />
            <p>Blanja</p>
          </div>
          <div>
            <h4>Please Login with your account</h4>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-lg-4 col-md-6 col-sm-8 col-xxl-4 col-xl-4 col-12">
          <ul
            className="nav nav-pills mb-3 justify-content-center"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="button signup-customer active"
                id="pills-Customer-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-Customer"
                type="button"
                role="tab"
                aria-controls="pills-Customer"
                aria-selected="true"
              >
                Customer
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="button signup-seller"
                id="pills-Seller-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-Seller"
                type="button"
                role="tab"
                aria-controls="pills-Seller"
                aria-selected="false"
              >
                Seller
              </button>
            </li>
          </ul>

          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-Customer"
              role="tabpanel"
              aria-labelledby="pills-Customer-tab"
              tabindex="0"
            >
              <form className="pt-4" onSubmit={handleSubmitCustomer}>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control py-2 px-3"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control py-2 px-3"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="text-end mt-2 ">
                  <Link className="text-danger" to="/ForgotPassword">
                    {" "}
                    Forgot Password?
                  </Link>
                </div>
                <button type="submit" className="button create-account mt-4">
                  Login
                </button>
              </form>
            </div>
            <div
              className="tab-pane fade"
              id="pills-Seller"
              role="tabpanel"
              aria-labelledby="pills-Seller-tab"
              tabindex="0"
            >
              <form className="pt-4" onSubmit={handleSubmitSeller}>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control py-2 px-3"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control py-2 px-3"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="text-end mt-2 ">
                  <Link className="text-danger" to="/ForgotPassword">
                    {" "}
                    Forgot Password?
                  </Link>
                </div>
                <button type="submit" className="button create-account mt-4">
                  Login
                </button>
              </form>
            </div>
          </div>

          <div>
            <p className="mt-5 Register">
              Don't have a Blanja account? <Link to="/Register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
