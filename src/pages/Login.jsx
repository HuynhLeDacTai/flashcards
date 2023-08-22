import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../styles/Login.scss";
import { validateEmail, validateInput } from "../utils/validate";
import { useDispatch } from "react-redux";
import { authenticate } from "../api/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const submitFormLogin = async () => {
    setCheckEmail(validateEmail(email));
    setCheckPassword(validateInput(password));
    if (!checkEmail && !checkPassword) {
      const data = {
        email: email,
        password: password,
      };
      try {
        await authenticate(data, dispatch);
        history.push("/flashcards");
      } catch (error) {
        console.error("Error registering user:", error);
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      submitFormLogin();
    }
  };
  return (
    <div className="site-content-wrapper">
      <div className="content-wrapper">
        <div>
          <h3 style={{ textAlign: "center", margin: "12px 0 0" }}>
            Bạn phải đăng nhập trước
          </h3>
          <div className="container login-container">
            <div className="contentblock auth-box">
              <p>
                Đăng nhập ngay để bắt đầu trải nghiệm học tiếng Anh và luyện thi
                TOEIC/IELTS hiệu quả cùng hàng trăm ngàn học viên mỗi ngày.
              </p>
              <div className="row">
                <h3>Đăng nhập với </h3>
                <div className="social-login">
                  <div className="social-block login-block ">
                    <span className="btn btn-block f-login-btn">
                      Đăng nhập với Facebook
                    </span>
                  </div>
                  <div className="social-block login-block ">
                    <span className="btn btn-block g-login-btn">
                      Đăng nhập với Google
                    </span>
                  </div>
                </div>
                <form style={{ padding: "0 20px" }}>
                  <div className="form-group">
                    <label className="label">Email</label>
                    <div>
                      <input
                        type="text"
                        className={
                          checkEmail
                            ? "form-control blank-noti"
                            : "form-control"
                        }
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                      ></input>
                      <p
                        style={{
                          display: checkEmail ? "block" : "none",
                          color: checkEmail ? "red" : "black",
                        }}
                      >
                        *Email không hợp lệ !!
                      </p>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="label">Mật khẩu</label>
                    <div>
                      <input
                        type="password"
                        className={
                          checkPassword
                            ? "form-control blank-noti"
                            : "form-control"
                        }
                        onChange={(event) => {
                          setPassword(event.target.value);
                        }}
                        onKeyDown={handleKeyPress}
                      ></input>
                      <p
                        style={{
                          display: checkPassword ? "block" : "none",
                          color: checkPassword ? "red" : "black",
                        }}
                      >
                        *Vui lòng nhập mật khẩu !!
                      </p>
                    </div>
                  </div>
                  <div className="remember-checkbox">
                    <input
                      type="checkbox"
                      id="remember-me"
                      name="remember-me"
                      value="false"
                    ></input>
                    <p>Nhớ mật khẩu</p>
                  </div>
                  <Link to="/forget-pasword">Quên mật khẩu?</Link>
                </form>
                <div className="login-block">
                  <button
                    className="btn btn-block login-btn"
                    onClick={() => {
                      submitFormLogin();
                    }}
                  >
                    Đăng nhập
                  </button>
                </div>
              </div>
              <div>
                <p>
                  <Link to="/sign-in">
                    Bạn chưa là một thành viên? Đăng ký ngay!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
