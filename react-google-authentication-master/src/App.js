import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./App.css";
import  { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Logout from "./components/Logout";
import Display from "./components/ScoreDisplay";
import DisplayGrades from "./components/GradesDisplay";
import MentorDashboard from "./components/MentorDashboard";
import PerformanceDisplay from "./components/NEW_PerformanceDisplay";
import LandingPage from "./components/LandingPage";
import PresentationDisplay from "./components/PresentationDisplay";
// import MentorDashboard from './components/MentorDashboard';
import StudentDashboard from './components/pages/StudentDashboard';
import AdminDashboard from './components/pages/AdminDashboard';
// import msitLogo from "..public/msit_new_logo.png";

export default function App() {
  const [isLoggedin, setIsLoggedin] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [mentorFlag, setMentorFlag] = React.useState(false);
  const [studentEmailList, setStudentEmailList] = React.useState([]);
  const [data, setData] = React.useState("");
  const [score, setScore] = React.useState("");
  const [ss_score, setSSScore] = React.useState("");
  const [dropoutFlag, setDropoutFlag] = React.useState(false);

  const [activeKey, setActiveKey] = React.useState('performance');

  // console.log(data);
  useEffect(() => {
    let isMounted = true;

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Router>
      <div className="App" style={{ marginLeft: 15, marginRight: 15 }}>
        <Switch>
          <Route exact path="/">
            {!isLoggedin ? (
              <LandingPage
                updateLogin={setIsLoggedin}
                updateEmail={setEmail}
                updateMentorFlag={setMentorFlag}
                updateStudentEmailList={setStudentEmailList}
                updateData={setData}
                updateScore={setScore}
                updateSSScore={setSSScore}
                mentor={mentorFlag}
                studentEmail=""
                updateDropoutFlag={setDropoutFlag}
              />
            ) : mentorFlag ? (
              <MentorDashboard
                mentorFlag={mentorFlag}
                updateMentorFlag={setMentorFlag}
                mentorEmail={email}
                studentEmailList={studentEmailList}
              />
            ) : (
              <div>
                <Tabs
                  id="controlled-tab-example"
                  activeKey={activeKey}
                  onSelect={(key) => setActiveKey(key)}
                >
                 <Tab eventKey="performance" title="Performance">
                {data && data.dashboard_data && data.dashboard_data.learning_center ? (
                  <PerformanceDisplay
                    mentor={mentorFlag}
                    email={email}
                    attendance={data.dashboard_data.attendance || []}
                    grades={data.dashboard_data.grades || []}
                    lastUpdated={data.last_updated}
                    courseStats={data.course_stats}
                    percentageIT={data.course_attendance?.IT || 0}
                    percentageSS={data.course_attendance?.SS || 0}
                    learningCenter={data.dashboard_data.learning_center}
                  />
                ) : (
                  <p>Loading performance data...</p>
                )}
              </Tab>
              <Tab eventKey="attendance" title="Attendance">
                <Display
                  mentor={mentorFlag}
                  userEmail={email}
                  res={data}
                  lastUpdated={data?.last_updated || ''}
                  learningCenter={data?.dashboard_data?.learning_center || {}}
                  score={score}
                  ss_score={ss_score}
                />
              </Tab>
              <Tab eventKey="presentation" title="Presentations">
                    <PresentationDisplay
                      mentor={mentorFlag}
                      email={email}
                      lastUpdated={data?.last_updated || ''}
                      res={data}
                      learningCenter={data?.dashboard_data?.learning_center || {}}
                      pptScores={data?.dashboard_data?.ppt_scores || []}
                    />
                  </Tab>

                  <Tab eventKey="transcript" title="Transcript">
                    <DisplayGrades
                      mentor={mentorFlag}
                      email={email}
                      res={data}
                      lastUpdated={data?.last_updated || ''}
                      learningCenter={data?.dashboard_data?.learning_center || {}}
                    />
                  </Tab>
                </Tabs>
                <br />
                <Logout
                  updateStudentEmailList={setStudentEmailList}
                  updateLogin={setIsLoggedin}
                  updateMentorFlag={setMentorFlag}
                />
              </div>
            )}
          </Route>
          <Route path="/admin-dashboard">
            <AdminDashboard />
          </Route>
          <Route path="/student-dashboard">
            <StudentDashboard />
          </Route>
          <Route path="/mentor-dashboard">
            <MentorDashboard />
          </Route>
    
        </Switch>
        {dropoutFlag && <h5>Student has dropped out.</h5>}
      </div>
    </Router>
  );
}

