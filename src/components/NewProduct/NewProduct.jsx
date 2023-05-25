import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Rating from "../../components/Rating/Rating";
import { FormatRupiah } from "@arismun/format-rupiah";
import { Link } from "react-router-dom";

const NewProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3003/product`)
      .then(function (response) {
        setProducts(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div class="header-products">
        <h1>New</h1>
        <p>Find clothes that are trending recently</p>
      </div>

      <div class="content-products d-grid">
        <div class="row justify-content-lg-start">
          {products.map((item) => (
            <div class="col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
              <Link to={`/product/${item.id_product}`}>
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewProduct;
