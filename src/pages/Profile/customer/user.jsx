import React, { useState } from "react";
import Layout from "../../../components/BaseLayout/Layout";
import "./profile-cust.css";
import { Link } from "react-router-dom";
import MyAccount from "./MyAccount";
import profile from "../../../assets/img/profile/profile.png";
import Test2 from "./test2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faLocationArrow,
  faLocationDot,
  faPencil,
  faPencilAlt,
  faPencilSquare,
  faPerson,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const MyUser = () => {
  const [link, setLink] = useState("link1");
  console.log(link);

  return (
    <Layout>
      <div className="row __row-main">
        <div className="col-12 col-md-3  pt-md-5 pt-3 m-0 sticky-top __col-left">
          <ul className="nav flex-md-column align-items-center align-items-md-start justify-content-center gap-3 gap-md-0">
            <li className="nav-item">
              <div className="profile d-flex">
                <div className="image img-fluid ">
                  <img
                    src={profile}
                    alt=""
                    className="img-fluid __img-profile"
                  />
                </div>
                <div className="desc d-grid align-items-center d-md-block d-none">
                  <p className="ps-2 pb-0 mb-0">Aldy Markussen</p>
                  <span className="ps-2">
                    <FontAwesomeIcon icon={faPencilSquare}></FontAwesomeIcon>{" "}
                    edit profile
                  </span>
                </div>
              </div>
            </li>
            <li className="nav-item pt-md-5 pt-0">
              <Link
                className="decoration-none d-flex align-items-center"
                to={"/profile-customer/test"}
                onClick={() => setLink("link1")}
              >
                <FontAwesomeIcon
                  icon={faUser}
                  //   className="bg-danger p-2 rounded-circle"
                  style={{ height: "13px", width: "13px" }}
                ></FontAwesomeIcon>
                <span className="ps-2 d-md-block d-none">My Account</span>
              </Link>
            </li>
            <li className="nav-item pt-md-3 pt-0">
              <Link
                className="decoration-none d-flex align-items-center"
                to={"/profile-customer/test2"}
                onClick={() => setLink("link2")}
              >
                <FontAwesomeIcon
                  icon={faLocationDot}
                  //   className="bg-primary p-2 rounded-circle"
                  style={{ height: "13px", width: "13px" }}
                ></FontAwesomeIcon>
                <span className="ps-2 d-md-block d-none">Shipping Address</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-9 __col-right pt-5 d-flex justify-content-center">
          {link === "link1" ? <MyAccount></MyAccount> : <Test2></Test2>}
        </div>
      </div>
    </Layout>
  );
};

export default MyUser;
