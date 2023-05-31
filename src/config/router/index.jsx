import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginCust from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";
import DetailProduct from "../../pages/DetailProduct/DetailProduct";
import Home from "../../pages/Home";
import Mybag from "../../pages/Mybag/Mybag";
import ForgotPassword from "../../pages/Auth/ForgotPassword/ResetPassword";
import Checkout from "../../pages/Checkout/Checkout";
import Test from "../../pages/Test";
// import CreateProduct from "../../components/Modal/CreateProduct";
// import UpdateProduct from "../../components/Modal/UpdateProduct";
import MyOrder from "../../pages/Profile/Seller/MyOrder";
import ProfileCustomer from "../../pages/Profile/customer/MyCustomer";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<LoginCust />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/ForgotPassword" element={<ForgotPassword />}></Route>
          <Route path="/product/:id" element={<DetailProduct />}></Route>
          <Route path="/Mybag" element={<Mybag />}></Route>
          <Route path="/Checkout" element={<Checkout />}></Route>
          <Route path="/Test" element={<Test />}></Route>
          {/* <Route path="/CreateProduct" element={<CreateProduct />}></Route>
          <Route path="/UpdateProduct" element={<UpdateProduct />}></Route> */}
          <Route path="/MyCatalogue" element={<MyOrder />}></Route>
          <Route path="/MyProfile" element={<ProfileCustomer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
