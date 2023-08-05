import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import "../styles/Navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="nav-container">
        <div className="nav-content">
          <span className="nav-logo">
            <Link to="/" className="navbar-logo">
              <img src="/images/logo_full_sm.png" alt="logo"></img>
            </Link>
          </span>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/my-course" className="nav-link">
                Khoá học của tôi
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/online-course" className="nav-link">
                Khoá học online
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/online-exam" className="nav-link">
                Đề thi online
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/flashcards" className="nav-link">
                Flashcards
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/activate-course" className="nav-link">
                Kích hoạt khoá học
              </Link>
            </li>
            <li
              className="nav-item nav-item-user"
              onClick={() => setToggle(!toggle)}
            >
              <Link to="/user-info" className="nav-user ">
                <span className="user-image">
                  <img src="/images/user_icon.png" alt="user" />
                </span>
                <i className="fa-solid fa-caret-down"></i>
              </Link>

              <div className={toggle ? "dropdown-menu show" : "dropdown-menu"}>
                <div>
                  <h6 className="dropdown-header">Thông báo</h6>
                  <div className="new-notify-content">
                    <p>Bạn chưa có thông báo mới</p>
                    <div className="view-all-notify">
                      <a href="/notification">{`Xem tất cả >>`}</a>
                    </div>
                  </div>
                  <div className="dropdown-divider"></div>
                  <Link to="/" className="dropdown-item">
                    Lịch học của tôi
                  </Link>
                  <Link to="/" className="dropdown-item">
                    Trang cá nhân
                  </Link>
                  <a className="dropdown-item" href="/logout">
                    Đăng xuất
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
