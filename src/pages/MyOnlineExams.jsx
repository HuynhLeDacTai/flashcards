import React from "react";
import "../styles/MyOnlineExams.scss";
import ExamList from "./../components/ExamList";
import { useEffect } from "react";
import { getAllTest } from "../api/testApi";
import { useState } from "react";

const MyOnlineExams = () => {
  const [listTests, setListTests] = useState([]);
  useEffect(async () => {
    const response = await getAllTest();
    if (response && response.data) {
      setListTests(response.data);
      console.log(response.data);
    }
  }, []);
  return (
    <>
      <div className="site-wrapper">
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
                  <div className="user-target-info-box">
                    <div className="user-target-user">
                      <div className="">
                        <span className="acount-profile-img">
                          <img src="/images/user_icon.png" alt="" />
                        </span>
                      </div>
                      <div
                        className="user-name-text"
                        style={{ textAlign: "center" }}
                      >
                        anna
                      </div>
                    </div>
                    <div className="divider sm"></div>
                    <div className="user-target-info">
                      <p className="user-target-info">
                        <i>
                          Bạn chưa tạo mục tiêu cho quá trình luyện thi của
                          mình. <a> Tạo ngay</a>
                        </i>
                      </p>
                      <div className="mt-3">
                        <a
                          href=""
                          className="btn btn-sm btn-block btn-round btn-sky"
                          style={{ fontWeight: "500" }}
                        >
                          <span className="fa-solid fa-chart-line mr-1"></span>
                          Thống kê kết quả
                        </a>
                      </div>
                    </div>
                  </div>
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
