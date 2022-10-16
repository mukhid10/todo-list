import React from "react";

import "./addactivity.css";

import { BsPlusLg } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowUpDownFill } from "react-icons/ri";
import Modalitem from "../../components/modalAddItem/Modalitem";

function Addactivity() {
  return (
    <div className="container-fluid addactivity">
      <div className="container">
        <div className="header-addactivity d-flex justify-content-between my-4">
          <p className="activity-add m-0">
            <RiArrowLeftSLine color="black" fontSize={"50px"} /> Activity
          </p>
          <div className="d-flex">
            <div className="filter-activity me-3">
              <RiArrowUpDownFill color="gray" fontSize={"25px"} />
            </div>
            <button type="button" className="btn-tambah">
              <BsPlusLg color="white" fontSize={"18px"} />
              Tambah
            </button>
          </div>
        </div>
        <div className="addactivity-content">
          <img
            src="https://ivan-todo-devrank.netlify.app/static/media/empty-item.a0b4b794.png"
            alt=""
          />
        </div>
      </div>
      <Modalitem />
    </div>
  );
}

export default Addactivity;
