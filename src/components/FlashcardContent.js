import React from "react";
import "../styles/FlashcardContent.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { useEffect } from "react";

const FlashcardContent = () => {
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
    <>
      {" "}
      <div className="content-wrapper">
        {console.log(page)}
        <div className="flashcard-container container">
          <div className="alert alert-success">
            <span className="fa-solid fa-circle-exclamation"></span>
            Chú ý: Bạn có thể tạo flashcards từ highlights (bao gồm các
            highlights các bạn đã tạo trước đây) trong trang chi tiết kết quả
            bài thi.
            <a href="/">Xem hướng dẫn.</a>
          </div>
          <br />

          <div className="flashcard-content-wrapper row">
            <div className="flashcard-content">
              <h2>Đang học:</h2>
              <p>
                <i>
                  Bạn chưa học list từ nào.{" "}
                  <a href="/discover">Khám phá ngay</a> hoặc bắt đầu tạo các
                  list từ mới.
                </i>
              </p>
              <br />
              <h2>List từ đã tạo:</h2>

              <div className="flashcard-list row">
                <div className="add-new card-item">
                  <a href="/add-new">
                    <div className="add-btn card-item-content">
                      <span className="fa-solid fa-plus"></span>
                      Tạo list từ
                    </div>
                  </a>
                </div>

                <div className="flashcard-item card-item">
                  <div className="flashcard-item-container card-item-content">
                    <Link to="/flashcard/1">
                      <div className="flashcard-item-content ">
                        <div className="item-title">Flashcard Beginner</div>
                        <div className="item-content">
                          <div>
                            <span className="far fa-clone"></span>0 từ
                          </div>
                          <div className="item-description">
                            <i>description</i>
                          </div>
                        </div>
                        <div className="item-user">
                          <span className="item-user-avatar">D</span>
                          <span className="item-user-username">DacTai</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="flashcard-item card-item">
                  <div className="flashcard-item-container card-item-content">
                    <Link to="/flashcard/2">
                      <div className="flashcard-item-content">
                        <div className="item-title">Flashcard Advanced</div>
                        <div className="item-content">
                          <div>
                            <span className="far fa-clone"></span>0 từ
                          </div>
                          <div className="item-description">
                            <i>description</i>
                          </div>
                        </div>
                        <div className="item-user">
                          <span className="item-user-avatar">D</span>
                          <span className="item-user-username">DacTai</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="flashcard-item card-item">
                  <div className="flashcard-item-container card-item-content">
                    <Link to="/flashcard/2">
                      <div className="flashcard-item-content">
                        <div className="item-title">Flashcard Advanced</div>
                        <div className="item-content">
                          <div>
                            <span className="far fa-clone"></span>0 từ
                          </div>
                          <div className="item-description">
                            <i>description</i>
                          </div>
                        </div>
                        <div className="item-user">
                          <span className="item-user-avatar">D</span>
                          <span className="item-user-username">DacTai</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="flashcard-item card-item">
                  <div className="flashcard-item-container card-item-content">
                    <Link to="/flashcard/2">
                      <div className="flashcard-item-content">
                        <div className="item-title">Flashcard Advanced</div>
                        <div className="item-content">
                          <div>
                            <span className="far fa-clone"></span>0 từ
                          </div>
                          <div className="item-description">
                            <i>description</i>
                          </div>
                        </div>
                        <div className="item-user">
                          <span className="item-user-avatar">D</span>
                          <span className="item-user-username">DacTai</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="flashcard-item card-item">
                  <div className="flashcard-item-container card-item-content">
                    <Link to="/flashcard/2">
                      <div className="flashcard-item-content">
                        <div className="item-content">
                          <div>
                            <span className="far fa-clone"></span>0 từ
                          </div>
                          <div className="item-description">
                            <i>description</i>
                          </div>
                        </div>
                        <div className="item-user">
                          <span className="item-user-avatar">D</span>
                          <span className="item-user-username">DacTai</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="flashcard-item card-item">
                  <div className="flashcard-item-container card-item-content">
                    <Link to="/flashcard/2">
                      <div className="flashcard-item-content">
                        <div className="item-title">Flashcard Advanced</div>
                        <div className="item-content">
                          <div>
                            <span className="far fa-clone"></span>0 từ
                          </div>
                          <div className="item-description">
                            <i>description</i>
                          </div>
                        </div>
                        <div className="item-user">
                          <span className="item-user-avatar">D</span>
                          <span className="item-user-username">DacTai</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <br />
              <nav className="">
                <div className="pagination">
                  {page.map((element, index) => {
                    return (
                      <span
                        className={
                          element === activePage
                            ? "page-item active"
                            : "page-item"
                        }
                        onClick={(event) => {
                          setActivePage(element);
                        }}
                      >
                        <a className="page-link">{element}</a>
                      </span>
                    );
                  })}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="modal show">
        <div className="modal-dialog">
          <div className="modal-content">
            <button className="close-modal" type="button">
              <span>{`×`}</span>
            </button>
            <div className="modal-body">
              <div className="container">
                <h1>Tạo list từ mới</h1>
                <form>
                  <div id="flashcard-modal-title" className="form-group">
                    <label className="label">Tiêu đề*</label>
                    <div>
                      <input
                        type="text"
                        className="modal-text-input form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="label">Mô tả</label>
                    <textarea className="flashcard-modal-desc form-control"></textarea>
                  </div>
                  <div className="form-group save-btn-modal">
                    <button type="submit" className="btn btn-primary">
                      Lưu
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashcardContent;
