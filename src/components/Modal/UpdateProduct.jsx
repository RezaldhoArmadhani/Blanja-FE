import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import axios from "axios";
// import Swal from "sweetalert";
import { updateProduct } from "../../redux/action/productAction";
import { useDispatch } from "react-redux";

const UpdateProduct = ({
  id,
  name,
  price,
  description,
  stock,
  rating,
  color,
  size,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState({
    id,
    name,
    price,
    description,
    stock,
    rating,
    color,
    size,
  });

  const dispatch = useDispatch();
  const [photo, setPhoto] = useState(null);

  const handleUpload = (e) => {
    setPhoto(e.target.files[0]);
  };
  console.log(data);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(data, photo));

    // const formData = new FormData();
    // formData.append("name", data.name);
    // formData.append("price", data.price);
    // formData.append("description", data.description);
    // formData.append("stock", data.stock);
    // formData.append("rating", data.rating);
    // formData.append("color", data.color);
    // formData.append("size", data.size);
    // formData.append("photo", photo);
    // formData.append("id_category", "1");
    // formData.append("id_seller", "ec8ef2e7-c138-46a3-a0eb-f1105c2f132c");

    // console.log(id);
    // axios
    //   .put(`${process.env.REACT_APP_BACKEND}/product/${id}`, formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     Swal("Updated!", "Product Update Succes!", "success");
    //     setShow(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     Swal("Failed!", "Product Update Failed!", "error");
    //     setShow(false);
    //   });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <input
              className="form-control mt-3"
              type="text"
              placeholder="name"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="price"
              name="price"
              value={data.price}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="description"
              name="description"
              value={data.description}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="stock"
              name="stock"
              value={data.stock}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="rating"
              name="rating"
              value={data.rating}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="color"
              name="color"
              value={data.color}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="size"
              name="size"
              value={data.size}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="file"
              placeholder="photo"
              name="photo"
              onChange={handleUpload}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" id="button-addon2">
              Update
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default UpdateProduct;
