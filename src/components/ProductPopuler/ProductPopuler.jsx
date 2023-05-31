import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { FormatRupiah } from "@arismun/format-rupiah";
import Rating from "../../components/Rating/Rating";

const ProductPopuler = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://blanja-be-production.up.railway.app/product")
      .then(function (response) {
        console.log(response);
        setProducts(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div class="header-products">
        <h1>Populer</h1>
        <p>You’ve never seen it before!</p>
      </div>

      <div class="content-products d-grid">
        <div class="row justify-content-lg-start">
          {products.map((item) => (
            <div class="col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
              <div class="card">
                <img
                  src={item.photo}
                  alt=""
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div class="card-body">
                  <p>{item.name}</p>
                  <p class="price">
                    <FormatRupiah value={item.price} />
                  </p>
                  <p class="detail">Zalora Cloth</p>
                  <Rating />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPopuler;
