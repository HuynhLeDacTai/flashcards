import React from "react";
import "../styles/FlashcardContent.scss";
import { useState } from "react";
import { useEffect } from "react";
import FlashcardItem from "./FlashcardItem";
import { addFlashcard, getAllFlashcardsByUser } from "../api/flashcardApi";
import { useUserInfo } from "../utils/apiUtils";
import { generateArray } from "../utils/functionUtils";
import Pagination from "./Pagination";

const FlashcardContent = () => {
  const [activePage, setActivePage] = useState(1);
  const [page, setPage] = useState([]);
  const [totalPage, setTotalPage] = useState();
  const [modal, setModal] = useState(false);
  const [titleFlashcard, setTitleFlashcard] = useState("");
  const [descFlashcard, setDescFlashcard] = useState("");
  const [checkTitle, setCheckTitle] = useState(false);
  const [dataFlashcards, setDataFlashcards] = useState([]);
  const userId = useUserInfo().id;
  const userName = useUserInfo().name;

  useEffect(() => {
    const getDataFlashcard = async () => {
      await getAllFlashcardsByUser(activePage)
        .then((response) => {
          setDataFlashcards(response.data.data);
          setTotalPage(response.data.totalPage);
          setPage(generateArray(response.data.totalPage));
        })
        .catch((error) => {
          console.error(error);
        });
    };

    getDataFlashcard();
  }, [activePage]);

  const showModal = () => {
    document.body.classList.add("no-scroll");
    setModal(true);
  };

  const submitModal = async (event) => {
    event.preventDefault();
    if (titleFlashcard === "") {
      setCheckTitle(true);
      return;
    }
    const newFlashcard = {
      title: titleFlashcard.trim(),
      description: descFlashcard.trim(),
      userId: userId,
      amount: 0,
    };

    const response = await addFlashcard(newFlashcard);
    if (dataFlashcards.length < 9) {
      setDataFlashcards([
        ...dataFlashcards,
        {
          id: response.data.id,
          ...newFlashcard,
        },
      ]);
    } else {
      setTotalPage(totalPage + 1);
      setPage(generateArray(totalPage + 1));
    }
    setModal(false);
    setTitleFlashcard("");
    setDescFlashcard("");
  };

  const changePage = async (event, page) => {
    event.preventDefault();
    setActivePage(page);
  };

  const nextPage = async (event) => {
    event.preventDefault();
    setActivePage(activePage + 1);
  };

  const backPage = async (event) => {
    event.preventDefault();
    setActivePage(activePage - 1);
  };
  return (
    <>
      {modal === false && document.body.classList.remove("no-scroll")}
      <div className="content-wrapper">
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
                <div
                  className="add-new card-item"
                  onClick={() => {
                    showModal();
                  }}
                >
                  <a href="/#" onClick={(e) => e.preventDefault()}>
                    <div className="add-btn card-item-content">
                      <span className="fa-solid fa-plus"></span>
                      Tạo list từ
                    </div>
                  </a>
                </div>
                {dataFlashcards.map((item) => {
                  return (
                    <>
                      <FlashcardItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        desc={item.description}
                        user={userName}
                        amount={item.amount}
                      />
                    </>
                  );
                })}
              </div>
              <br />
              <Pagination
                activePage={activePage}
                totalPage={totalPage}
                backPage={backPage}
                changePage={changePage}
                nextPage={nextPage}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`modal ${modal && "show"}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              className="close-modal"
              type="button"
              onClick={() => {
                setModal(false);
              }}
            >
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
                        className={
                          checkTitle
                            ? "modal-text-input form-control blank-noti"
                            : "modal-text-input form-control"
                        }
                        onChange={(event) => {
                          setTitleFlashcard(event.target.value);
                        }}
                        value={titleFlashcard}
                      ></input>
                      <p style={{ display: checkTitle ? "block" : "none" }}>
                        *Tiêu đề không được trống!!
                      </p>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="label">Mô tả</label>
                    <textarea
                      className="flashcard-modal-desc form-control"
                      onChange={(event) => {
                        setDescFlashcard(event.target.value);
                      }}
                      value={descFlashcard}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          submitModal(event);
                        }
                      }}
                    ></textarea>
                  </div>
                  <div className="form-group save-btn-modal">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={(event) => {
                        submitModal(event);
                      }}
                    >
                      Lưu
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="overlay" style={{ display: modal ? "block" : "none" }}></div>
    </>
  );
};

export default FlashcardContent;
