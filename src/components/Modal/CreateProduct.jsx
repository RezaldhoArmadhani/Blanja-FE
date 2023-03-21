import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import axios from "axios";
// import swal from "sweetalert";
import { createProduct } from "../../redux/action/productAction";
import { useDispatch } from "react-redux";

const CreateProduct = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [saveImage, setSaveImage] = useState(null);
  function handleUpload(e) {
    console.log(e.target.files[0]);
    const uploader = e.target.files[0];
    setSaveImage(uploader);
  }
  const [data, setData] = useState({
    name: "",
    rating: "",
    color: "",
    size: "",
    stock: "",
    price: "",
    photo: "",
    description: "",
    id_category: "1",
    id_seller: "1f3490d6-e4fe-479b-a303-bd32ee193b98",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(data, saveImage));
    // const formData = new FormData();
    // formData.append("name", data.name);
    // formData.append("rating", data.rating);
    // formData.append("color", data.color);
    // formData.append("stock", data.stock);
    // formData.append("price", data.price);
    // formData.append("photo", saveImage);
    // formData.append("description", data.description);
    // formData.append("id_category", data.id_category);
    // formData.append("id_seller", data.id_seller);
    // axios
    //   .post("http://localhost:3003" + "/product", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     swal("Created", "Product Create Success", "success");
    //     setShow(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     swal("Failed!", "Product Create Failed", "error");
    //     setShow(false);
    //   });
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
  };

  return (
    <Fragment>
      <button
        className="btn btn-success"
        style={{ marginRight: "10px" }}
        onClick={handleShow}
      >
        Create Product
      </button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
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
              placeholder="stock"
              name="stock"
              value={data.stock}
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
              type="file"
              placeholder="photo"
              name="photo"
              onChange={handleUpload}
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
              placeholder="id_category"
              name="id_category"
              value={data.id_category}
              onChange={handleChange}
              disable
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="id_seller"
              name="id_seller"
              value={data.id_seller}
              onChange={handleChange}
              disable
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="size"
              name="size"
              value={data.size}
              onChange={handleChange}
              disable
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" id="button-addon2" title="Register">
              Create
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </Fragment>
  );
};

export default CreateProduct;
