import React from "react";
import "../styles/MyOnlineExams.scss";
import ExamList from "./../components/ExamList";
import { useEffect } from "react";
import { getAllTest } from "../api/testApi";
import { useState } from "react";
import UserInfoBox from "../components/UserInfoBox";
import { getCurrentFlashcard, getUserInfo } from "../utils/apiUtils";

const MyOnlineExams = () => {
  const [listTests, setListTests] = useState([]);
  const userInfo = getUserInfo();
  useEffect(() => {
    const getAll = async () => {
      const response = await getAllTest();
      if (response && response.data) {
        setListTests(response.data);
        console.log(response.data);
      }
    };

    getAll();
  }, []);
  return (
    <>
      <div className="site-wrapper" style={{ paddingTop: "0" }}>
        <div className="site-content-wrapper">
          <div className="content-header">
            <div className="container">
              <div className="row">
                <div className="left-content">
                  <h1>Thư viện đề thi</h1>
                  <br />
                  <form method="GET">
                    <div className="row">
                      <div className="search-box">
                        <div className="form-group">
                          <div className="input-addon">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Nhập từ khoá bạn muốn tìm kiếm: tên sách, dạng câu hỏi ..."
                            />
                            <span className="fa-solid fa-magnifying-glass"></span>
                          </div>
                        </div>
                      </div>
                      <div className="selection-box">
                        <div className="form-group">
                          <select name="" className="custom-select">
                            <option value disabled selected>
                              --Chọn bộ đề thi--
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <button className="btn btn-primary">Tìm kiếm</button>
                    </div>
                  </form>
                  <br />
                </div>
                <div className="right-content">
                  <UserInfoBox name={userInfo.name} />
                </div>
              </div>
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a href="" className="nav-link active">
                    Tất cả
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Bộ đề thi
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Đề rút gọn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ExamList listTests={listTests} />
        </div>
      </div>
    </>
  );
};

export default MyOnlineExams;
