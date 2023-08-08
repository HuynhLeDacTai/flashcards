import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../styles/Login.scss";
import { useDispatch } from "react-redux";
import { validateEmail, validateInput } from "../utils/validate";
import { register } from "../api/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkName, setCheckName] = useState(false);
  const dispatch = useDispatch();

  const submitFormLSignup = async () => {
    setCheckEmail(validateEmail(email));
    setCheckPassword(validateInput(password));
    setCheckName(validateInput(name));
    if (!checkEmail && !checkPassword && !checkName) {
      const data = {
        name: name,
        email: email,
        password: password,
      };
      await register(data, dispatch);
      try {
      } catch (error) {
        console.error("Error registering user:", error);
      }
    }
  };
  return (
    <div className="site-content-wrapper">
      <div className="content-wrapper">
        <div>
          <div className="container login-container">
            <div className="contentblock auth-box">
              <p>
                Đăng ký ngay để bắt đầu trải nghiệm học tiếng Anh và luyện thi
                TOEIC/IELTS hiệu quả cùng hàng trăm ngàn học viên mỗi ngày.
              </p>
              <h3 style={{ textAlign: "center" }}>Đăng ký tài khoản </h3>
              <form style={{ padding: "0 20px" }}>
                <div className="form-group">
                  <label className="label">Họ và tên</label>
                  <div>
                    <input
                      type="text"
                      className={
                        checkName ? "form-control blank-noti" : "form-control"
                      }
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    ></input>
                    <p
                      style={{
                        display: checkName ? "block" : "none",
                        color: checkName ? "red" : "black",
                      }}
                    >
                      *Vui lòng nhập tên đầy đủ !!
                    </p>
                  </div>
                </div>

                <div className="form-group">
                  <label className="label">Email</label>
                  <div>
                    <input
                      type="text"
                      className={
                        checkEmail ? "form-control blank-noti" : "form-control"
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
              </form>
              <div className="login-block">
                <button
                  className="btn btn-block login-btn"
                  onClick={(event) => {
                    submitFormLSignup(event);
                  }}
                >
                  Đăng ký tài khoản
                </button>
              </div>
              <div>
                <p>
                  Bằng cách đăng ký, bạn đồng ý với
                  <Link to="/term">
                    {" "}
                    điều khoản sử dụng và điều khoản bảo mật.
                  </Link>
                </p>
              </div>
              <div>
                <p>
                  <Link to="/login">Đã có tài khoản? Đăng nhập ngay!</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
