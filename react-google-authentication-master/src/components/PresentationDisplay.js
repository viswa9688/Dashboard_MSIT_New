import React from "react";
import { Jumbotron, Table, Row, Col, Container } from "react-bootstrap";


function PPTScoreRowData(props) {
  if (props.type === "heading") {
    let i = props.startIndex;
    let ppt_table_headings = props.weekly_scores
      .slice(props.startIndex, props.endIndex)
      .map(() => {
        i += 1;
        return (
          <td scope="col" style={{ background: "#CC3314", color: "white",paddingLeft:"0.3rem", }}>
            {i}
          </td>
        );
      });
    return ppt_table_headings;
  } else if (props.type === "scores") {
    let i = 0;
    let ppt_score_table = props.weekly_scores
      .slice(props.startIndex, props.endIndex)
      .map((score) => {
        i += 1;
        if (i === 1)
          return (
            <React.Fragment>
              <th style={{ background: "#CC3314", color: "white",paddingLeft:"0.5rem",textAlign:"center",fontSize:"0.9rem",verticalAlign:"middle" }}>Scores</th>
              <td style={{ paddingLeft:"0.5rem", minWidth:"78px",textAlign:"center", fontSize:"0.9rem",verticalAlign:"middle" }}>{score}</td>
            </React.Fragment>
          );
        return <td style={{ paddingLeft:"0.5rem",minWidth:"78px",textAlign:"center", fontSize:"0.9rem",verticalAlign:"middle"  }} >{score}</td>;
      });
    return ppt_score_table;
  }
}

function PPTScoreTable(props) {
  // console.log(props);
  if (typeof undefined_var != typeof props.info) {
    const data = props.info;
    const num_of_ppt = data["num_of_ppt"];
    const total_ppt = data["total_ppt"];
    const absent = data["absent"];
    const remedial = data["remedial"];
    const average_score = data["average"];
    let weekly_scores = data["weekly_scores"];
    // console.log(average_score);

    let headingRowOne = PPTScoreRowData({
      type: "heading",
      startIndex: 0,
      endIndex: 8,
      weekly_scores: weekly_scores,
    });
    let headingRowTwo = PPTScoreRowData({
      type: "heading",
      startIndex: 8,
      endIndex: 16,
      weekly_scores: weekly_scores,
    });
    let headingRowThree = PPTScoreRowData({
      type: "heading",
      startIndex: 16,
      endIndex: 24,
      weekly_scores: weekly_scores,
    });
    let headingRowFour = PPTScoreRowData({
      type: "heading",
      startIndex: 24,
      endIndex: 32,
      weekly_scores: weekly_scores,
    });
    let dataRowOne = PPTScoreRowData({
      type: "scores",
      startIndex: 0,
      endIndex: 8,
      weekly_scores: weekly_scores,
    });
    let dataRowTwo = PPTScoreRowData({
      type: "scores",
      startIndex: 8,
      endIndex: 16,
      weekly_scores: weekly_scores,
    });
    let dataRowThree = PPTScoreRowData({
      type: "scores",
      startIndex: 16,
      endIndex: 24,
      weekly_scores: weekly_scores,
    });
    let dataRowFour = PPTScoreRowData({
      type: "scores",
      startIndex: 24,
      endIndex: 32,
      weekly_scores: weekly_scores,
    });
    
    return (  
      <React.Fragment>
        <Container>
          <Table responsive bordered hover >
            <thead style={{ color: "white", background: "#CC3314" }}>
              <tr>
                <th>Number of ppts</th>
                <th>Total number of ppts conducted</th>
                <th>Absent</th>
                <th>Remedial</th>
                <th>Average Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{num_of_ppt}</td>
                <td>{total_ppt}</td>
                <td>{absent}</td>
                <td>{remedial}</td>
                <td>{average_score}</td>
              </tr>
            </tbody>
          </Table>
        </Container>

        <Table
          responsive bordered hover table-fixed
          style={{
            alignItems: "center",
            textAlign: "center",
            width: "80%",
            margin: "auto",
            tableLayout: "auto",
            overflowX:"hidden"
            
          }}
        >
          <thead style={{textAlign: "center",fontSize:"0.9rem", verticalAlign:"middle", }}>
            <tr><th scope="col" style={{color: "white",background: "#CC3314",width:"15%",  paddingLeft:"0.3rem"}}>Week #</th>{headingRowOne}</tr>
          </thead>
          <tbody><tr >{dataRowOne}</tr></tbody>
          <thead style={{textAlign: "center",fontSize:"0.9rem",paddingLeft:"0",verticalAlign:"middle"}}>
            <tr><th scope="col"style={{color: "white",background: "#CC3314",paddingLeft:"0.3rem"}}>Week #</th>{headingRowTwo}</tr>
          </thead>
          <tbody><tr >{dataRowTwo}</tr></tbody>
          <thead style={{textAlign: "center",fontSize:"0.9rem",verticalAlign:"middle"}}>
            <tr><th scope="col" style={{color: "white",background: "#CC3314",paddingLeft:"0.3rem"}}>Week #</th>{headingRowThree}</tr>
          </thead>
          <tbody><tr >{dataRowThree}</tr></tbody>
          <thead style={{textAlign: "center",fontSize:"0.9rem",verticalAlign:"middle"}}>
            <tr><th scope="col"style={{color: "white",background: "#CC3314",paddingLeft:"0.3rem"}}>Week #</th>{headingRowFour}</tr>
          </thead>
          <tbody><tr >{dataRowFour}</tr></tbody>
        </Table>
      </React.Fragment>
    );
  }
  return <div></div>;
}

export default function PresentationDisplay(props) {
  let capitalize_student_name = "";
  if (
    typeof props.res.dashboard_data.grades["student_name"] !=
    typeof undefined_var
  ) {
    let student_name_arr = props.res.dashboard_data.grades[
      "student_name"
    ].split(" ");
    for (let i = 0; i < student_name_arr.length; i++) {
      capitalize_student_name +=
        student_name_arr[i].charAt(0).toUpperCase() +
        student_name_arr[i].slice(1).toLowerCase() +
        " ";
    }
  }
  return (
    <div>
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

        <h1 style={{color: "white",paddingTop:"1.5%"}}>Presentation Scores</h1>
        {/* <h6 style={{ color: "white"}}>
        This web page shows weekly presentation scores.
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
          Presentation Scores
        </h1>
        <h6 style={{ color: "white" }}>
          This web page shows weekly presentation scores.
        </h6>
      </Jumbotron> */}
      <h4 style={{ fontFamily: "Raleway",fontSize:"large", textAlign:"center"}}>
        {capitalize_student_name} ({props.learningCenter})
      </h4>
      <h6 style={{ fontFamily: "Raleway",fontSize:"large",textAlign:"center" }}>
                         Data was last updated on {props.lastUpdated}
      </h6>
      <br />
      <PPTScoreTable info={props.pptScores} />
    </div>
  );
}
