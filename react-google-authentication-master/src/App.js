import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import "./App.css";
import Logout from "./components/Logout";
import Display from "./components/ScoreDisplay";
import DisplayGrades from "./components/GradesDisplay";
import MentorDashboard from "./components/MentorDashboard";
import PerformanceDisplay from "./components/NEW_PerformanceDisplay";
import LandingPage from "./components/LandingPage";
import PresentationDisplay from "./components/PresentationDisplay";
import Admin from "./pages/admin"; 
import Mentor from "./pages/mentor"; 
import Student from "./pages/student"; 

export default function App() {
  const [isLoggedin, setIsLoggedin] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [mentorFlag, setMentorFlag] = React.useState(false);
  const [studentEmailList, setStudentEmailList] = React.useState([]);
  const [data, setData] = React.useState("");
  const [score, setScore] = React.useState("");
  const [ss_score, setSSScore] = React.useState("");
  const [dropoutFlag, setDropoutFlag] = React.useState(false);
  const [key, setKey] = React.useState("performance");

  return (
    <Router>
      <div className="App" style={{ marginLeft: 15, marginRight: 15 }}>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/mentor">
            <Mentor />
          </Route>
          <Route path="/student">
            <Student />
          </Route>
          <Route path="/" exact component={LandingPage} >
            {isLoggedin ? (
              mentorFlag ? (
                <Redirect to="/mentor" />
              ) : (
                <Redirect to="/student" />
              )
            ) : null}
          </Route>
        </Switch>
        {isLoggedin && (
          <React.Fragment>
            {mentorFlag ? (
              <div>
                <MentorDashboard
                  mentorFlag={mentorFlag}
                  updateMentorFlag={setMentorFlag}
                  mentorEmail={email}
                  studentEmailList={studentEmailList}
                />
                <br />
                <Logout
                  updateStudentEmailList={setStudentEmailList}
                  updateLogin={setIsLoggedin}
                  updateMentorFlag={setMentorFlag}
                />
                <br />
              </div>
            ) : (
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
              >
                {/* Render other tabs */}
              </Tabs>
            )}
            {dropoutFlag && <h5>Student has dropped out.</h5>}
            <br />
            <Logout
              updateLogin={setIsLoggedin}
              updateMentorFlag={setMentorFlag}
            />
            <br />
          </React.Fragment>
        )}
      </div>
    </Router>
  );
}
