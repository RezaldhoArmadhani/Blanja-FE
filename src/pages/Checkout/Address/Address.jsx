import React from "react";
import "./address.css";

const Address = () => {
  return (
    <div className="select row mb-3">
      <div className="select-col col-12 d-flex align-items-center ms-2">
        <section className="adress">
          <p className="name-buyer">Ethan Hunt</p>
          <p className="the-adress">
            Perumahan Sinawang Indah, Ngantru, Kec. Kepanjen, Kabupaten Malang,
            Jawa Timur, 53181 [Blanja Note: blok c 16] Kepanjen, Kab. Malang,
            53181
          </p>
          <button
            data-bs-toggle="modal"
            data-bs-target="#change-another-adress"
            className="another-adress"
          >
            Choose another address
          </button>
        </section>
      </div>
    </div>
  );
};

export default Address;
