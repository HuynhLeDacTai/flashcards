import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import "../styles/Navbar.scss";
import { useState } from "react";
import { useIsLogin, useUserInfo } from "../utils/apiUtils";
import { logout } from "../api/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const isLogin = useIsLogin();
  const userInfor = useUserInfo();
  const dispatch = useDispatch();
  const history = useHistory();

  const openDropdownMenu = (event) => {
    event.preventDefault();
    setToggle(!toggle);
  };

  const handleLogout = async () => {
    await logout(dispatch);
    history.push("/login");
  };
  return (
    <>
      <div className="nav-container">
        <div className="nav-content">
          <span className="nav-logo">
            <Link to="/flashcards" className="navbar-logo">
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
            {isLogin ? (
              <li
                className="nav-item nav-item-user"
                onClick={(event) => openDropdownMenu(event)}
              >
                <Link
                  to=""
                  className="nav-user "
                  onClick={(event) => event.preventDefault()}
                >
                  <span className="user-image">
                    <img src="/images/user_icon.png" alt="user" />
                  </span>
                  <i className="fa-solid fa-caret-down"></i>
                </Link>

                <div
                  className={toggle ? "dropdown-menu show" : "dropdown-menu"}
                >
                  <div>
                    <h6 className="dropdown-header" style={{ color: "black" }}>
                      Xin chào {userInfor.name} !
                    </h6>
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
                    <p
                      className="dropdown-item"
                      onClick={(event) => {
                        handleLogout(event);
                      }}
                    >
                      Đăng xuất
                    </p>
                  </div>
                </div>
              </li>
            ) : (
              <li></li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
