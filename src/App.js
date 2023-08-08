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
import { decodeJwtToken, useIsLogin } from "./utils/apiUtils";
import { setIsLogin } from "./store/actions/authActions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(
        setIsLogin(
          localStorage.getItem("token"),
          decodeJwtToken(localStorage.getItem("token"))
        )
      );
    }
  }, [dispatch]);
  const isLogin = useIsLogin();
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login" exact>
          {isLogin ? <Redirect to="/flashcards" /> : <Login />}
        </Route>
        <Route path="/sign-in" exact>
          {isLogin ? <Redirect to="/flashcards" /> : <Signup />}
        </Route>
        <Route path="/my-course" exact>
          {isLogin ? <MyCourse /> : <Redirect to="/login" />}
        </Route>
        <Route path="/online-course" exact>
          {isLogin ? <MyOnlineCourses /> : <Redirect to="/login" />}
        </Route>
        <Route path="/online-exam" exact>
          {isLogin ? <MyOnlineExams /> : <Redirect to="/login" />}
        </Route>
        <Route path="/flashcards" exact>
          {isLogin ? <Flashcard /> : <Redirect to="/login" />}
        </Route>
        <Route path="/flashcard/lists/1" exact>
          {isLogin ? <DetailFlashcard /> : <Redirect to="/login" />}
        </Route>
        <Route path="/activate-course" exact>
          {isLogin ? <ActivateCourse /> : <Redirect to="/login" />}
        </Route>
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
