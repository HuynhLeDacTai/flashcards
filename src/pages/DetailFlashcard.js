import React from "react";
import "../styles/DetailFlashcard.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";

const DetailFlashcard = () => {
  const [activePage, setActivePage] = useState(1);
  const [page, setPage] = useState([]);
  const maxPage = 3;

  useEffect(() => {
    var pageArray = [];
    for (let i = 1; i <= maxPage; i++) {
      pageArray = [...pageArray, i];
    }
    setPage(pageArray);
  }, []);
  return (
    <div className="site-wrapper">
      <div className="site-content-wrapper">
        <div className="content-header">
          <div className="header-container">
            <div className="image-wrapper">
              <img src="/images/testonline_banner.jpg" alt="banner"></img>
            </div>
            <br />
            <h1 className="detail-flashcard-title">
              Flashcards: Từ điển
              <a
                className="btn btn-primary"
                href="/#"
                onClick={(e) => e.preventDefault()}
              >
                Chỉnh sửa
              </a>
              <a
                className="btn btn-primary"
                href="/#"
                onClick={(e) => e.preventDefault()}
              >
                Thêm từ mới
              </a>
              <a
                className="btn btn-primary"
                href="/#"
                onClick={(e) => e.preventDefault()}
              >
                Tạo hàng loạt
              </a>
            </h1>
            <p>
              <i>Name of flashcard</i>
            </p>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="flashcard-list-container">
            <div className="flashcard-play">
              <Link to="" className="btn btn-sky btn-block">
                Luyện tập flashcards
              </Link>
            </div>
            <br />
            <div>
              <Link to="">
                <span className="fa-solid fa-shuffle"></span>Xem ngẫu nhiên
              </Link>
              <span
                className="text-danger"
                data-confirm_text="Bạn có chắc chắn muốn dừng việc học list từ này không? Mọi thông tin luyện tập sẽ bị xóa."
              >
                <span className="fa-solid fa-calendar-xmark"></span>Dừng học
                list từ này
              </span>
            </div>
            <br />
            <p style={{ margin: "0" }}>List này có 2 từ</p>
            <br />
            <div className="contentblock">
              <div className="row">
                <div className="card-content">
                  <h2 className="h3">
                    Có
                    <span className="audio-player">
                      <span className="audio-player-btn">
                        <span className="fa-solid fa-volume-high"></span>
                      </span>
                    </span>
                    <span style={{ fontSize: "1rem", fontWeight: "400" }}>
                      UK
                    </span>
                    <span className="audio-player">
                      <span className="audio-player-btn">
                        <span className="fa-solid fa-volume-high"></span>
                      </span>
                    </span>
                    <span style={{ fontSize: "1rem", fontWeight: "400" }}>
                      US
                    </span>
                    <a
                      style={{
                        fontSize: "1rem",
                        fontWeight: "400",
                        marginLeft: "0.25rem",
                      }}
                    >
                      <i class="fa-regular fa-pen-to-square"></i>
                    </a>
                  </h2>
                  <div style={{ fontWeight: "500" }}>Định nghĩa</div>
                  <div
                    style={{ whiteSpace: "pre-line", marginBottom: "0.5rem" }}
                  >
                    Nghĩa của từ đó
                  </div>
                </div>
              </div>
              <div className="delete-content">
                <a>
                  <i class="fa-solid fa-trash"></i>
                </a>
              </div>
            </div>
            <br />
            <nav className="">
              <div className="pagination">
                {page.map((element, index) => {
                  return (
                    <span
                      key={index}
                      className={
                        element === activePage
                          ? "page-item active"
                          : "page-item"
                      }
                      onClick={(event) => {
                        setActivePage(element);
                      }}
                    >
                      <a
                        className="page-link"
                        href="/#"
                        onClick={(e) => e.preventDefault()}
                      >
                        {element}
                      </a>
                    </span>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailFlashcard;
