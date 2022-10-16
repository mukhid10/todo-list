import React from "react";

import "./message.css";

import { BsFillExclamationOctagonFill } from "react-icons/bs";

function Message({ show, onHide }) {
  console.log(show);
  return (
    <div id={show ? "message" : "message-off"} onClick={onHide}>
      <div className="message-content">
        <BsFillExclamationOctagonFill color="#00A790" fontSize={"21px"} />
        <p className="m-0 ms-2 fw-bold">Activity berhasil dihapus</p>
      </div>
    </div>
  );
}

export default Message;
