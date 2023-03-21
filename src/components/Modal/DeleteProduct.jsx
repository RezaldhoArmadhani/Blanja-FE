import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteProducts } from "../../redux/action/productAction";
import { useDispatch } from "react-redux";
// import axios from "axios";
// import Swal from "sweetalert";

const DeleteProduct = ({ id, name, children }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //   const dispatch = useDispatch();

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteProducts(id));
    // axios
    //   .delete(process.env.REACT_APP_BACKEND + "/product/" + id)
    //   .then((res) => {
    //     Swal("Deleted!", "Product Delete Success!", "success");
    //     console.log(res);
    //     setShow(false);
    //   })
    //   .catch((err) => {
    //     Swal("Failed!", "Product Delete Failed!", "error");
    //     console.log(err);
    //     setShow(false);
    //   });
  };
  return (
    <Fragment>
      <button
        className="btn btn-danger text-light mt-1 ms-2"
        style={{ marginRight: "10px" }}
        onClick={handleShow}
      >
        {children}
      </button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are sure want to delete product? {name}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default DeleteProduct;
