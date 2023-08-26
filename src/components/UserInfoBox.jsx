import React from "react";

const UserInfoBox = (props) => {
  const { name } = props;
  return (
    <>
      {" "}
      <div className="user-target-info-box">
        <div className="user-target-user">
          <div className="">
            <span className="acount-profile-img">
              <img src="/images/user_icon.png" alt="" />
            </span>
          </div>
          <div className="user-name-text" style={{ textAlign: "center" }}>
            {name}
          </div>
        </div>
        <div className="divider sm"></div>
        <div className="user-target-info">
          <p className="user-target-info">
            <i>
              Bạn chưa tạo mục tiêu cho quá trình luyện thi của mình.{" "}
              <a> Tạo ngay</a>
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
    </>
  );
};

export default UserInfoBox;
