import React, { useEffect, useState } from "react";
import "./TestNavigation.scss";
import { getCurrentTest } from "../../utils/apiUtils";

const TestNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [numberQuestion, setNumberQuestion] = useState([]);
  const amount = getCurrentTest();
  numberQuestion && console.log(numberQuestion);

  useEffect(() => {
    let number = [];
    for (let i = 1; i <= amount.amountOfQuestion; i++) {
      number = [
        ...number,
        {
          index: i,
          done: false,
        },
      ];
    }

    setNumberQuestion(number);

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY >= 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigationStyle = {
    position: isScrolled && "relative",
  };

  const navigation__innerStyle = {
    position: isScrolled ? "fixed" : "static",
    transform: isScrolled
      ? "translate3d(0px, 0px, 0px)"
      : "translate3d(0px, 0px, 0px)",

    top: isScrolled && "80px",
    left: isScrolled && "1307px",
    width: isScrolled && "200px",
    bottom: isScrolled && "auto",
  };
  return (
    <>
      <div className="test-navigation" style={navigationStyle}>
        <div
          id="test-navigation__inner"
          className="test-navigation__inner"
          style={navigation__innerStyle}
        >
          <div>
            <div
              className="timeleft-wrapper"
              style={{ marginBottom: "0.5rem" }}
            >
              Thời gian làm bài:
              <br />
              <span className="timeleft">30:00</span>
            </div>
            <button
              className="btn btn-outline-primary btn-block"
              style={{ margin: "1rem 0" }}
            >
              NỘP BÀI
            </button>
            <div style={{ margin: "0.5rem 0" }}>
              <div>
                <span className="link text-danger collapsed">
                  <i>
                    Khôi phục/lưu bài làm
                    <span className="fa-solid fa-chevron-right"></span>
                  </i>
                </span>
              </div>
            </div>
            <div className="collapse">
              <div className="text-danger" style={{ marginBottom: "12px" }}>
                <i>
                  Nếu bị lỗi mạng và không nộp được bài, click vào đây để khôi
                  phục bài làm gần nhất.
                </i>
              </div>
              <div
                className="btn-sm btn-block btn btn-outline-danger"
                style={{ marginBottom: "12px" }}
              >
                Khôi phục
              </div>
              <div className="text-primary" style={{ marginBottom: "12px" }}>
                <i>Nếu bạn chưa muốn nộp bài nhưng vẫn muốn lưu. </i>
                <span className="link" style={{ fontWeight: "500" }}>
                  Lưu bài làm
                </span>
              </div>
              <div className="test-questions-list">
                <div className="test-questions-list-part">
                  <div className="test-questions-list-wrapper">
                    {numberQuestion.map((item) => {
                      return (
                        <div
                          className={`test-questions-listitem ${
                            item.done ? "done" : ""
                          }`}
                        >
                          {item.index}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestNavigation;
