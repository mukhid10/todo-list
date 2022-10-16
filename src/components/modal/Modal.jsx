import React from "react";

import "./modal.css";

import { TiWarningOutline } from "react-icons/ti";

function Modal({ show, onHide, hapus, title }) {
  return (
    <div id={show ? "modal" : "modal-off"}>
      <div className="content-modal">
        <TiWarningOutline color="#ED4C5C" fontSize={"90px"} />
        <p className="m-0 pesan-modal my-5">
          Apakah anda yakin menghapus activity ?
        </p>
        <div className="wrapper-btn-modal d-flex justify-content-evenly">
          <button className="btn-modal-batal" onClick={onHide}>
            Batal
          </button>
          <button className="btn-modal-hapus" onClick={hapus}>
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
