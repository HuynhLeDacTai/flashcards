import React from "react";
import { Route, Redirect } from "react-router-dom";
import MyCourse from "../pages/MyCourse";
import MyOnlineCourses from "../pages/MyOnlineCourses";
import MyOnlineExams from "../pages/MyOnlineExams";
import Flashcard from "../pages/Flashcard";
import DetailFlashcard from "../pages/DetailFlashcard";
import ActivateCourse from "../pages/ActivateCourse";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { getLocalToken, useIsLogin } from "../utils/apiUtils";
import Review from "../pages/Review";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogin = useIsLogin();
  return (
    <Route
      {...rest}
      render={(props) =>
        getLocalToken() !== "" || isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const Routes = () => {
  return (
    <>
      <PrivateRoute path="/my-course" component={MyCourse} />
      <PrivateRoute path="/online-course" component={MyOnlineCourses} />
      <PrivateRoute path="/online-exam" component={MyOnlineExams} />
      <PrivateRoute path="/flashcards" component={Flashcard} />
      <PrivateRoute path="/flashcard/lists/:id" component={DetailFlashcard} />
      <PrivateRoute path="/activate-course" component={ActivateCourse} />
      <PrivateRoute path="/flashcards/review/:id" component={Review} />
      <Route path="/login" component={Login} />
      <Route path="/sign-in" component={Signup} />
      <Redirect from="/" to="/login" />
    </>
  );
};

export default Routes;
