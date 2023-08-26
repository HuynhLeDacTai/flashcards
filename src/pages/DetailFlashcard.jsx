import React from "react";
import "../styles/DetailFlashcard.scss";
import "../styles/FlashcardContent.scss";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import CardItem from "../components/CardItem";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import {
  deleteFlashcard,
  editFlashcard,
  getCardDetail,
} from "../api/flashcardApi";
import { getCurrentFlashcard } from "../utils/apiUtils";
import { addCard, deleteCard, editCard } from "../api/cardApi";

const DetailFlashcard = () => {
  const DELETE_FLASHCARD = "flashcard";
  const DELETE_CARD = "card";
  const EDIT_CARD = "edit-card";
  const EDIT_FLASHCARD = "edit-flashcard";
  const ADD_CARD = "add-card";
  const [activePage, setActivePage] = useState(1);
  const [page, setPage] = useState([]);
  const [dataCards, setDataCards] = useState([]);
  const [checkTitle, setCheckTitle] = useState(false);
  const [modal, setModal] = useState({
    open: false,
    type: "",
  });
  const [confirmModal, setConfirmModal] = useState({
    open: false,
    type: "",
  });
  const [curCard, setCurCard] = useState({
    id: "",
    name: "",
    defination: "",
  });
  const maxPage = 3;
  const { id } = useParams();
  const parsedFlashcard = getCurrentFlashcard();
  const [titleDisplay, setTitleDisplay] = useState(parsedFlashcard.title);
  const [title, setTitle] = useState(parsedFlashcard.title);
  const [desc, setDesc] = useState(parsedFlashcard.desc);
  const [nameWord, setNameWord] = useState("");
  const [defination, setDefination] = useState("");
  const [amountOfWord, setAmountOfWord] = useState(parsedFlashcard.amount);
  const history = useHistory();

  useEffect(() => {
    var pageArray = [];
    for (let i = 1; i <= maxPage; i++) {
      pageArray = [...pageArray, i];
    }
    setPage(pageArray);

    const getDataCardDetail = async (id) => {
      await getCardDetail(id)
        .then((response) => {
          setDataCards(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    getDataCardDetail(id);
  }, [id]);

  const showModal = (event, type) => {
    event.preventDefault();
    document.body.classList.add("no-scroll");
    setModal({
      open: true,
      type: type,
    });
  };

  const closeModal = () => {
    setModal({
      open: false,
      type: "",
    });
    setNameWord("");
    setDefination("");
  };

  const openConfirmModal = (event, type) => {
    event.preventDefault();
    closeModal();
    setConfirmModal({
      open: true,
      type: type,
    });
  };

  const closeConfirmModal = () => {
    setConfirmModal({
      open: false,
      type: "",
    });
  };

  const submitConfirmModal = () => {
    if (confirmModal.type === DELETE_FLASHCARD) {
      deleteFlashcard(parsedFlashcard.id);
      closeConfirmModal();
      history.push("/flashcards");
      window.location.reload();
    } else {
      let listCard = dataCards;
      deleteCard(curCard.id);
      closeConfirmModal();
      listCard = listCard.filter((item) => item.id !== curCard.id);
      setDataCards(listCard);
      setCurCard({
        id: "",
        name: "",
        defination: "",
      });
      setAmountOfWord(amountOfWord - 1);
    }
  };

  const cancelConfirmModal = (event) => {
    event.preventDefault();
    closeConfirmModal();
    if (confirmModal.type === DELETE_FLASHCARD) {
      showModal(event, EDIT_FLASHCARD);
    } else {
      setConfirmModal({
        open: false,
        type: "",
      });
    }
  };

  const handleSubmitEditFlashcard = (event) => {
    event.preventDefault();
    const data = {
      title: title.trim(),
      description: desc.trim(),
    };
    editFlashcard(parsedFlashcard.id, data);
    closeModal();
    setTitleDisplay(title);
  };

  const handleSubmitAdd = (event) => {
    event.preventDefault();
    const data = {
      name: nameWord.trim(),
      defination: defination.trim(),
      flashcardId: parsedFlashcard.id,
    };
    addCard(data);
    setDataCards([...dataCards, data]);
    setNameWord("");
    setDefination("");
    setAmountOfWord(amountOfWord + 1);
    closeModal();
  };

  const handleSubmitEditCard = async (event) => {
    event.preventDefault();
    const data = {
      name: nameWord.trim(),
      defination: defination.trim(),
      flashcardId: parsedFlashcard.id.trim(),
    };
    await editCard(curCard.id, data);
    closeModal();
    window.location.reload();
  };

  const deleteCardItem = (event, id) => {
    openConfirmModal(event, DELETE_CARD);
    let card = dataCards.filter((item) => item.id === id);
    if (card) {
      setCurCard({
        id: card[0].id.trim(),
        name: card[0].name.trim(),
        defination: card[0].defination.trim(),
      });
    }
  };

  const editCardItem = (event, id) => {
    showModal(event, EDIT_CARD);
    let card = dataCards.filter((item) => item.id === id);
    if (card) {
      setCurCard({
        id: card[0].id.trim(),
        name: card[0].name.trim(),
        defination: card[0].defination.trim(),
      });

      setNameWord(card[0].name);
      setDefination(card[0].defination);
    }
  };
  return (
    <>
      {modal.open === false &&
        confirmModal.open === false &&
        document.body.classList.remove("no-scroll")}
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
                  onClick={(e) => {
                    showModal(e, EDIT_FLASHCARD);
                  }}
                >
                  Chỉnh sửa
                </a>
                <a
                  className="btn btn-primary"
                  href="/#"
                  onClick={(e) => {
                    showModal(e, ADD_CARD);
                  }}
                >
                  Thêm từ mới
                </a>
                <a
                  className="btn btn-primary"
                  href="/#"
                  // onClick={(e) => {
                  //   showModal(e, "add-mutiples");
                  // }}
                >
                  Tạo hàng loạt
                </a>
              </h1>
              <p>
                <i>{titleDisplay}</i>
              </p>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="flashcard-list-container">
              <div className="flashcard-play">
                <Link
                  to={`/flashcard/review/${parsedFlashcard.id}`}
                  className="btn btn-sky btn-block"
                >
                  Luyện tập flashcards
                </Link>
              </div>
              <br />
              <div>
                <Link to={`/flashcard/review/random/${parsedFlashcard.id}`}>
                  <span
                    className="fa-solid fa-shuffle"
                    style={{ marginRight: "4px" }}
                  ></span>
                  Xem ngẫu nhiên
                </Link>
                <span
                  className="text-danger"
                  data-confirm_text="Bạn có chắc chắn muốn dừng việc học list từ này không? Mọi thông tin luyện tập sẽ bị xóa."
                >
                  <span
                    className="fa-solid fa-calendar-xmark"
                    style={{ marginRight: "4px" }}
                  ></span>
                  Dừng học list từ này
                </span>
              </div>
              <br />
              <p style={{ margin: "0" }}>List này có {amountOfWord} từ</p>
              {dataCards.map((item) => {
                return (
                  <React.Fragment key={item.id}>
                    <br />
                    <CardItem
                      id={item.id}
                      name={item.name}
                      defination={item.defination}
                      editCard={editCardItem}
                      deleteCard={deleteCardItem}
                    />
                  </React.Fragment>
                );
              })}
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
            <div className={`modal ${modal.open && "show"}`}>
              <div className="modal-dialog" style={{ maxWidth: "500px" }}>
                <div className="modal-content">
                  <button
                    className="close-modal"
                    type="button"
                    onClick={() => {
                      closeModal();
                    }}
                  >
                    <span>{`×`}</span>
                  </button>
                  <div className="modal-body">
                    <div className="container">
                      <h1>
                        {modal.type === EDIT_FLASHCARD && "Chỉnh sửa list này"}
                        {modal.type === ADD_CARD && "Thêm từ mới"}
                        {modal.type === EDIT_CARD && "Chỉnh sửa"}
                      </h1>
                      <form>
                        <div id="flashcard-modal-title" className="form-group">
                          <label className="label">
                            {modal.type === EDIT_FLASHCARD
                              ? "Tiêu đề*"
                              : "Từ mới"}
                          </label>
                          <div>
                            <input
                              type="text"
                              className={
                                checkTitle
                                  ? "modal-text-input form-control blank-noti"
                                  : "modal-text-input form-control"
                              }
                              value={
                                modal.type === EDIT_FLASHCARD ? title : nameWord
                              }
                              onChange={(e) =>
                                modal.type === EDIT_FLASHCARD
                                  ? setTitle(e.target.value)
                                  : setNameWord(e.target.value)
                              }
                            ></input>
                            <p
                              style={{ display: checkTitle ? "block" : "none" }}
                            >
                              *Tiêu đề không được trống!!
                            </p>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="label">
                            {modal.type === EDIT_FLASHCARD
                              ? "Mô tả"
                              : "Định nghĩa"}
                          </label>
                          <textarea
                            className="flashcard-modal-desc form-control"
                            value={
                              modal.type === EDIT_FLASHCARD ? desc : defination
                            }
                            onChange={(e) =>
                              modal.type === EDIT_FLASHCARD
                                ? setDesc(e.target.value)
                                : setDefination(e.target.value)
                            }
                          ></textarea>
                        </div>

                        <div className="form-group save-btn-modal button-group">
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={(event) => {
                              if (modal.type === EDIT_FLASHCARD) {
                                handleSubmitEditFlashcard(event);
                              } else if (modal.type === ADD_CARD) {
                                handleSubmitAdd(event);
                              } else handleSubmitEditCard(event);
                            }}
                          >
                            Lưu
                          </button>
                          {modal.type === EDIT_FLASHCARD && (
                            <button
                              className="btn btn-danger"
                              onClick={(event) => {
                                openConfirmModal(event, DELETE_FLASHCARD);
                              }}
                            >
                              Xoá
                            </button>
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`modal confirm-modal ${confirmModal.open && "show"}`}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <button
                      className="close-modal close-confirm-modal-btn"
                      type="button"
                      onClick={() => {
                        closeConfirmModal();
                      }}
                    >
                      <span>{`×`}</span>
                    </button>
                    <div className="container">
                      <h3>Xác nhận ?</h3>
                      <div className="dropdown-divider"></div>
                      <p>Bạn có muốn xác nhận hành động ?</p>
                      <div className="form-group save-btn-modal button-group">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={(event) => {
                            submitConfirmModal(event);
                          }}
                        >
                          Có
                        </button>
                        <button
                          type="submit"
                          className="btn btn-danger"
                          onClick={(event) => {
                            cancelConfirmModal(event);
                          }}
                        >
                          Không
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="overlay"
          style={{
            display: modal.open || confirmModal.open ? "block" : "none",
          }}
        ></div>
      </div>
    </>
  );
};

export default DetailFlashcard;
