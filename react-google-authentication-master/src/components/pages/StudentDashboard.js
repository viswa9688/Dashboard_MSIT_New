import React from "react";
import CoursePercentage from "./components/CoursePercentage";
import GradesDisplay from "./components/GradesDisplay";

export default function StudentDashboard(props) {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <CoursePercentage
        score={props.score}
        ss_score={props.ss_score}
      />
      <GradesDisplay
        res={props.res}
        lastUpdated={props.lastUpdated}
        learningCenter={props.learningCenter}
      />
    </div>
  );
}
