import React from "react";
import UserInfoBox from "../components/UserInfoBox";
import { getCurrentFlashcard, getUserInfo } from "../utils/apiUtils";
import "../styles/MyOnlineExams.scss";
import { useParams } from "react-router-dom/cjs/react-router-dom";

const DetailExam = () => {
  const idExam = useParams();
  const userInfo = getUserInfo();
  return (
    <>
      <div className="site-content-wrapper">
        <div className="content-wrapper">
          <div className="container">
            <div className="row">
              <div className="left-content">
                <div className="practice-test-wrapper contentblock">
                  <h1>C18 IELTS listening test 1</h1>
                  <ul className="nav nav-horizontal nav-pills">
                    <li className="nav-item">
                      <a href="" className="nav-link active">
                        Thông tin đề thi
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="" className="nav-link">
                        Đáp án/Transcript
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane fade">
                      <br />
                      <div>
                        <a href="">Xem đáp án đề thi</a>
                      </div>
                      <br />
                    </div>
                    <div className="tab-pane fade show active">
                      <br />
                      <div>
                        <span>
                          <strong>Bộ đề thi: IELTS C18 Full Test 1</strong>
                        </span>
                      </div>
                      <div>
                        <span className="fa-regular fa-clock mr-1"></span>
                        <span>Thời gian làm bài: 40 phút </span> |
                        <span> 40 câu hỏi</span> | <span> 1035 bình luận</span>
                      </div>
                      <div>
                        <span className="fa-solid fa-user-pen mr-1"></span>
                        221466 người đã luyện tập đề thi này
                      </div>
                      <p
                        className="text-danger"
                        style={{ marginTop: "0.5rem" }}
                      >
                        <i>
                          Chú ý: để được quy đổi sang scaled score (ví dụ trên
                          thang điểm 990 cho TOEIC hoặc 9.0 cho IELTS), vui lòng
                          chọn chế độ làm FULL TEST
                        </i>
                      </p>
                      <ul className="nav nav-tabs">
                        <li className="nav-item ">
                          <a href="" className="nav-link active">
                            Luyện tập
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="" className="nav-link">
                            Thảo luận
                          </a>
                        </li>
                      </ul>
                      <br />
                      <div className="tab-content">
                        <div className="tab-pane fade active show">
                          <div className="alert alert-warning">
                            <span className="fa-solid fa-circle-exclamation"></span>{" "}
                            Sẵn sàng để bắt đầu làm full test? Để đạt được kết
                            quả tốt nhất, bạn cần dành ra 40 phút cho bài test
                            này.
                          </div>
                          <br />
                          <a
                            href={`/online-exam/practice/${idExam.id}`}
                            className="btn btn-primary"
                          >
                            BẮT ĐẦU THI
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-content">
                <UserInfoBox name={userInfo.name} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailExam;
