import React from "react";
import Celana from "../../../assets/img/product/jeans.jpg";
import Kaos from "../../../assets/img/product/kaos.jpg";

const Item = () => {
  return (
    <>
      <div className="row pic-one mb-3">
        <div className="col-12 pic-one-col d-flex align-items-center ms-2">
          <div className="col-8 col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 d-flex align-items-center">
            <div style={{ padding: "12px" }}>
              <img
                style={{ borderRadius: "10px", height: "80px", width: "80px" }}
                src={Celana}
                alt=""
              />
            </div>
            <div className="name">
              Celana Jeans
              <br />
              <span style={{ fontSize: "13px", color: "gray" }}>
                Zalora Cloth
              </span>
            </div>
          </div>
          <div className="col-1 col-sm-2 ms-auto text-end">
            <h5
              style={{
                color: "black",
                fontWeight: "700",
                paddingRight: "10px",
              }}
            >
              Rp. 70.000
            </h5>
          </div>
        </div>
      </div>
      <div className="row pic-two ">
        <div className="col-12 pic-one-col d-flex align-items-center ms-2">
          <div className="col-8 col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 d-flex align-items-center">
            <div style={{ padding: "12px" }}>
              <img
                style={{
                  borderRadius: "10px",
                  height: "80px",
                  width: "80px",
                  objectFit: "cover",
                }}
                src={Kaos}
                alt=""
              />
            </div>
            <div className="name">
              Kaos Oblong
              <br />
              <span style={{ fontSize: "13px", color: "gray" }}>
                Zalora Cloth
              </span>
            </div>
          </div>
          <div className="col-1 col-sm-2 ms-auto text-end">
            <h5
              style={{
                color: "black",
                fontWeight: "700",
                paddingRight: "10px",
              }}
            >
              Rp. 65.000
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
