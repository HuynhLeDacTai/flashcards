import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Flashcard from "./pages/Flashcard";
import MyCourse from "./pages/MyCourse";
import MyOnlineCourses from "./pages/MyOnlineCourses";
import MyOnlineExams from "./pages/MyOnlineExams";
import ActivateCourse from "./pages/ActivateCourse";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/my-course" exact>
          <MyCourse />
        </Route>
        <Route path="/online-course" exact>
          <MyOnlineCourses />
        </Route>
        <Route path="/online-exam" exact>
          <MyOnlineExams />
        </Route>
        <Route path="/flashcards" exact>
          <Flashcard />
        </Route>
        <Route path="/activate-course" exact>
          <ActivateCourse />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
