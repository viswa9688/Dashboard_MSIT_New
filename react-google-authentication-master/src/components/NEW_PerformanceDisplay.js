import React from "react";
import axios from "axios";
import { Jumbotron } from "react-bootstrap";
import CourseAccordion from "./NEW_CourseAccordion";

export default function PerformanceDisplay(props) {
  // console.log(props);
  return (
    <div>
      {/* <h1>Sukesh</h1> */}
      <Jumbotron
        style={{
          height: "90px",
          padding: "0px",
          fontFamily: "Raleway",
          backgroundColor: "#001340",
          // marginLeft:"10%",
          // marginRight:"10%"
        }}
      >
        {!props.mentor ? (
          <img
            style={{
              
              height: "90px",
              // margin: "20px",
            }}
            src={process.env.PUBLIC_URL + "/msit_new_logo.png"}
            alt="MSIT Logo"
            align="left"
          />
        ) : (
          <span></span>
        )}

        <h1 style={{color: "white",paddingTop:"1.5%"}}>Course</h1>
        {/* <h6 style={{ color: "white"}}>
        This web page shows the details of overall performance.
        </h6> */}
      </Jumbotron> 
      {/* <Jumbotron
        style={{
          height: "100px",
          padding: "0px",
          fontFamily: "Raleway",
          backgroundColor: "#001340",
        }}
      >
        {!props.mentor ? (
          <img
            style={{
              height: "100px",
            }}
            src={process.env.PUBLIC_URL + "/msit_new_logo.png"}
            alt="MSIT Logo"
            align="left"
          />
        ) : (
          <span></span>
        )}
        <h1 style={{ color: "white", paddingTop: "1%" }}>
          Course Performance
        </h1>
        <h6 style={{ color: "white" }}>
          This web page shows the details of overall performance.
        </h6>
      </Jumbotron> */}
      <CourseAccordion
        grades={props.grades}
        courseStats={props.courseStats}
        percentageIT={props.percentageIT}
        learningCenter={props.learningCenter}
        lastUpdated={props.lastUpdated}
      />
    </div>
  );
}
