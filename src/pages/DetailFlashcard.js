import React from "react";
import "../styles/DetailFlashcard.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import CardItem from "../components/CardItem";
import { useAuthToken } from "../utils/apiUtils";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { getCardDetail } from "../api/flashcardApi";

const DetailFlashcard = () => {
  const [activePage, setActivePage] = useState(1);
  const [page, setPage] = useState([]);
  const [dataCards, setDataCards] = useState([]);
  const maxPage = 3;
  const { id } = useParams();
  const storedFlashcard = localStorage.getItem("currentFlashcard");
  const parsedFlashcard = JSON.parse(storedFlashcard);
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
              <i>{parsedFlashcard.title}</i>
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
            <p style={{ margin: "0" }}>
              List này có {parsedFlashcard.amount} từ
            </p>
            {dataCards.map((item, index) => {
              return (
                <>
                  <br />
                  <CardItem name={item.name} defination={item.defination} />
                </>
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
        </div>
      </div>
    </div>
  );
};

export default DetailFlashcard;
