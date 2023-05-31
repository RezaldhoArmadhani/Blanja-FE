import React from "react";
import ImageGrid from "./ImageGrid/ImageGrid";
import Color from "./PickDetails/Color";
import Quantity from "./PickDetails/Quantity";
import "./detail-product.css";
import Button from "./PickDetails/Button";
// import ProductPopuler from "../../components/ProductPopuler/ProductPopuler";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";

const DetailProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://blanja-be-production.up.railway.app/product/${id}`)
      .then(function (response) {
        setProducts(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(id);
  return (
    <div>
      <NavbarLogin />
      <section className="detail-product container mt-5">
        <div className="adds">
          <div className="row">
            <div className="image-grid col-xxl-5 col-xl-5 col-md-6 col-lg-5 col-sm-12 col-12">
              <ImageGrid />
            </div>
            <div className="details col-xxl-7 col-xl-7 col-lg-7 col-md-6 col-sm-12 py-xxl-0 py-lg-0 py-md-0 py-5">
              <h4>{products[0]?.name}</h4>
              <p>Zalora Cloth</p>
              <div className="rating"></div>
              <p className="price">Price</p>
              <h4 className="money">Rp. {products[0]?.price}</h4>

              <div className="row color">
                <Color />
              </div>

              <div className="quantity row mt-4">
                <Quantity />
              </div>
              <div className="row buttonBuy my-xxl-5 my-lg-5 my-md-5 my-5 ">
                <Button />
              </div>
            </div>
          </div>
        </div>

        <div className="information">
          <div className="row py-xxl-5 py-lg-5 py-md-5 py-5">
            <div className="col-12">
              <h2 style={{ fontWeight: "bold", paddingBottom: "30px" }}>
                Informasi Produk
              </h2>
            </div>
            <div className="col-12">
              <p style={{ fontWeight: "bold" }}>Condition</p>
              <p
                style={{
                  color: "red",
                  marginTop: "-15px",
                  paddingBottom: "30px",
                }}
              >
                New
              </p>
            </div>
            <div className="col-12">
              <div className="description">
                <h4 style={{ fontWeight: "bold" }}>Description</h4>
                <p style={{ color: "grey", textAlign: "justify" }}>
                  {products[0]?.description}
                </p>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <h2 style={{ fontWeight: "bold", paddingTop: "50px" }}>
                  Product Review
                </h2>
              </div>
              <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-6">
                  <p
                    style={{
                      fontSize: "50px",
                      fontWeight: "600",
                      paddingTop: "20px",
                    }}
                  >
                    5.0
                    <span style={{ fontSize: "20px", color: "gray" }}>
                      {" "}
                      /10
                    </span>
                  </p>
                  <div class="review-stars">
                    <img src="../../assets/img/icon/Star.png" alt="" />
                    <img src="../../assets/img/icon/Star.png" alt="" />
                    <img src="../../assets/img/icon/Star.png" alt="" />
                    <img src="../../assets/img/icon/Star.png" alt="" />
                    <img src="../../assets/img/icon/Star.png" alt="" />
                  </div>
                </div>
                <div class="rate-detail">
                  <div class="rate-stars">
                    <div>
                      <img src="../../assets/img/icon/Star.png" alt="" />
                      <span>5</span>
                    </div>
                    <div>
                      <img src="../../assets/img/icon/Star.png" alt="" />
                      <span>4</span>
                    </div>
                    <div>
                      <img src="../../assets/img/icon/Star.png" alt="" />
                      <span>3</span>
                    </div>
                    <div>
                      <img src="../../assets/img/icon/Star.png" alt="" />
                      <span>2</span>
                    </div>
                    <div>
                      <img src="../../assets/img/icon/Star.png" alt="" />
                      <span>1</span>
                    </div>
                  </div>
                  <div class="rate-length">
                    <span class="rate5"></span>
                    <span class="rate4"></span>
                    <span class="rate3"></span>
                    <span class="rate2"></span>
                    <span class="rate1"></span>
                  </div>
                  <div class="rate-qty-sold">
                    <span>4</span>
                    <span>0</span>
                    <span>0</span>
                    <span>0</span>
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    // <div className='ProductPopular'>
    //     <ProductPopuler/>
    // </div>
  );
};

export default DetailProduct;
