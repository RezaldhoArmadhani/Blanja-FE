import React from "react";
import profile from "../../../assets/img/profile/profile.png";
import "./profile-cust.css";

const MyAccount = () => {
  return (
    <div className="border border-dark bg-light rounded p-4 __myaccount">
      <p className="fw-bolder fs-4 p-0 m-0">My Profile</p>
      <span className="text-secondary p-0">
        Manage your profile information
      </span>
      <hr className="w-100" />

      <div className="row">
        <div className="col-lg-8 col-12 p-4">
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-4 col-form-label">
              Name
            </label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="inputPassword" />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-4 col-form-label">
              Email
            </label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="inputPassword" />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-4 col-form-label">
              Phone Number
            </label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="inputPassword" />
            </div>
          </div>
          <div class="mb-3 row align-items-center">
            <label for="inputPassword" class="col-sm-4 col-form-label">
              Gender
            </label>
            <div class="col-sm-8">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">
                  Male
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2">
                  Female
                </label>
              </div>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-4 col-form-label">
              Date of Birth
            </label>
            <div class="col-sm-8">
              <input type="date" class="form-control" id="inputPassword" />
            </div>
          </div>

          <div class="mb-3 row pt-4 ">
            <label class="col-4"></label>
            <div class="col-8 d-lg-grid d-none">
              <button
                className="btn btn-danger rounded-pill"
                style={{ width: "120px" }}
              >
                Save
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-12 border-md-start border-none p-4 d-flex flex-column align-items-center">
          <div className="img pb-4">
            <img
              src={profile}
              alt=""
              style={{ height: "90px", width: "90px", borderRadius: "100%" }}
            />
          </div>
          <button className="btn btn-outline-secondary rounded-pill">
            Select Image
          </button>

          <div class="mb-3 row pt-4 d-block d-lg-none">
            <label class="col-sm-4"></label>
            <div class="col-sm-8">
              <button
                className="btn btn-danger rounded-pill"
                style={{ width: "120px" }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
