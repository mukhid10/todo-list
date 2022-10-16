import React, { useEffect, useState } from "react";

import { RiDeleteBin6Line } from "react-icons/ri";
import { BsPlusLg } from "react-icons/bs";

import "./dashboard.css";

import { getActivity, delActivity, postActivity } from "./action";

import Modal from "../../components/modal/Modal";
import Message from "../../components/message/Message";
import { Link } from "react-router-dom";

function Dashboard() {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [messageShow, setMessageShow] = useState(false);
  const [idActivity, setIdActivity] = useState();
  const [postSuccess, setpostSuccess] = useState();
  const [delSuccess, setDelSuccess] = useState();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  useEffect(() => {
    getData();
  }, [postSuccess, delSuccess]);

  const getData = async () => {
    const result = await getActivity();
    setData(result.data.data);
  };

  const postData = async () => {
    setpostSuccess(false);
    await postActivity();
    setpostSuccess(true);
  };

  const delData = async (id) => {
    setIdActivity(id);
    setModalShow(true);
  };

  const hapus = async () => {
    setDelSuccess(false);
    await delActivity(idActivity);
    setDelSuccess(true);
    setModalShow(false);
    setMessageShow(true);
  };

  return (
    <div className="container-fluid dashboard">
      <div className="container">
        <div className="header-dashboard d-flex justify-content-between my-4">
          <p className="activity m-0">Activity</p>
          <button
            type="button"
            className="btn-tambah"
            onClick={() => postData()}
          >
            <BsPlusLg color="white" fontSize={"18px"} />
            Tambah
          </button>
        </div>
        <div className="row">
          {data &&
            data.map((item, index) => (
              <div className="col-3 mt-4" key={index}>
                <Link
                  to={`/detail/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="cart-activity">
                    <p>{item.title}</p>

                    <div className="activity-footer">
                      <p>
                        {new Date(item.created_at).toLocaleDateString(
                          undefined,
                          options
                        )}
                      </p>
                      <RiDeleteBin6Line
                        color="gray"
                        fontSize="21px"
                        onClick={() => delData(item.id)}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
      <Modal
        show={modalShow}
        hapus={hapus}
        onHide={() => setModalShow(false)}
      />
      <Message show={messageShow} onHide={() => setMessageShow(false)} />
    </div>
  );
}

export default Dashboard;
