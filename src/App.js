import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Flashcard from "./pages/Flashcard";
import MyCourse from "./pages/MyCourse";
import MyOnlineCourses from "./pages/MyOnlineCourses";
import MyOnlineExams from "./pages/MyOnlineExams";
import ActivateCourse from "./pages/ActivateCourse";
import DetailFlashcard from "./pages/DetailFlashcard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { decodeJwtToken, getLocalToken, useIsLogin } from "./utils/apiUtils";
import { setIsLogin } from "./store/actions/authActions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Review from "./pages/Review";
import { addMulQuestion, addQuestion } from "./api/questionApi";
import { parseDataQuestion } from "./mockData/dataQuestion";
import DetailExam from "./pages/DetailExam";

function App() {
  const dispatch = useDispatch();
  useEffect(async () => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      dispatch(setIsLogin(access_token, decodeJwtToken(access_token)));
    }
  }, []);
  const isLogin = useIsLogin();
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/my-course" exact>
            {getLocalToken() !== "" || isLogin ? (
              <MyCourse />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/online-course" exact>
            {getLocalToken() !== "" || isLogin ? (
              <MyOnlineCourses />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/online-exam" exact>
            {getLocalToken() !== "" || isLogin ? (
              <MyOnlineExams />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/online-exam/test/:id" exact>
            {getLocalToken() !== "" || isLogin ? (
              <DetailExam />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/flashcards" exact>
            {getLocalToken() !== "" || isLogin ? (
              <Flashcard />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/flashcard/review/:id" exact>
            {getLocalToken() !== "" || isLogin ? (
              <Review mode={"normal"} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/flashcard/review/random/:id" exact>
            {getLocalToken() !== "" || isLogin ? (
              <Review mode={"random"} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/flashcard/lists/:id" exact>
            {getLocalToken() !== "" || isLogin ? (
              <DetailFlashcard />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/activate-course" exact>
            {getLocalToken() !== "" || isLogin ? (
              <ActivateCourse />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/sign-in" exact>
            <Signup />
          </Route>
          <Redirect from="/" to="/login" />
        </Switch>
      </Router>
    </>
  );
  // return (
  //   <Router>
  //     <Navbar />
  //     <Switch>
  //       <Routes />
  //     </Switch>
  //   </Router>
  // );
}

export default App;
