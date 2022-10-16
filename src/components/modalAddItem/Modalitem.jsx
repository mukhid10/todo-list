import React from "react";

import "./modalitem.css";

import { AiOutlineClose } from "react-icons/ai";

function Modalitem() {
  return (
    <div id="modal-item">
      <div className="modal-tem-content">
        <div className="header-additem">
          <p className="title-additem">Tambah List Item</p>
          <AiOutlineClose color="#A4A4A4" fontSize={"22px"} />
        </div>
        <hr className="m-0" />
        <div className="input-nama">
          <p>NAMA LIST ITEM</p>
          <input type="text" placeholder="Tambahkan Nama Activity" />
        </div>
        <div className="input-priority">
          <p>PRIORITY</p>
          <select name="priority" id="priority">
            <option value="1">Very High</option>
            <option value="2">High</option>
            <option value="3">Medium</option>
            <option value="4">Low</option>
            <option value="5">Very Low</option>
          </select>
        </div>
        <hr className="m-0 mt-4" />
      </div>
    </div>
  );
}

export default Modalitem;
