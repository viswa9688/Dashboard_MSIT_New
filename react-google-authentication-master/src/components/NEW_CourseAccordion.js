import React from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
// import { useMediaQuery } from 'react-responsive';
// import "../App.css"
import {
  Accordion,
  Card,
  Row,
  Col,
  ListGroup,
  Tabs,
  Tab,
  Table,
  Container
} from "react-bootstrap";
import { Bar, Line } from "react-chartjs-2";



function StatsGrade(props) {
  
  console.log("glagkitten");
  console.log(props[3]);
  //dictionary of courses with their respective grade count
  const grades_dict = props[0];
  const updateCourseStats = props[1];
  const grades = props[2];
  const bigCheck=props[3];
  const smll=props[4];

  let course_graphs = {};
  const xAxis = ["Incomplete", "F", "C", "B", "B+", "A", "A+", "Ex"];

  if ("" !== grades_dict && typeof undefined_var !== typeof grades_dict) {
    //dictionary containing subject names and respective frequency for each grade
    const labels = grades_dict;
    // list of course names
    let label_keys = Object.keys(labels);
    // console.log(labels, label_keys);
    label_keys.map((key) => {
      //dictionary with grade frequency for each course
      let course_cgpa_stats = labels[key];

      let yAxisOne = [];
      let yAxisTwo = [];

      let flag = true;
      let numerator_students = 0;
      let denominator_students = 0;

      // console.log(key, grades[key]["Grade"]);
      const yAxis = xAxis.map((grade) => {
        if (typeof course_cgpa_stats[grade] !== typeof undefined_var) {
          if (grades[key]["Grade"] === grade) {
            flag = false;
            yAxisOne.push(0);
            yAxisTwo.push(course_cgpa_stats[grade]);
          } else {
            yAxisOne.push(course_cgpa_stats[grade]);
            yAxisTwo.push(0);
          }
          denominator_students += parseFloat(course_cgpa_stats[grade]);
          if (flag || grades[key]["Grade"] === grade)
            numerator_students += parseFloat(course_cgpa_stats[grade]);
          return course_cgpa_stats[grade];
        }
        yAxisOne.push(0);
        yAxisTwo.push(0);
        return 0;
      });

      const percentile_val = (
        (numerator_students / denominator_students) *
        100
      ).toFixed(2);
      // console.log(
      //   ((numerator_students / denominator_students) * 100).toFixed(2)
      // );

      const graph_data = {
        labels: xAxis,
        // height: 400,
        datasets: [
          {
            label: "Number of Students",
            backgroundColor: "#6E85BA",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 1,
            barThickness: 10,
            barPercentage: 0.5,
            data: yAxisOne,
          },
          {
            label: "Number of Students",
            backgroundColor: "#000000",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 1,
            barThickness: 20,
            barPercentage: 0.5,
            data: yAxisTwo,
          },
        ],
      };
      //For BAR Chart Web
      if(bigCheck)
      {
        course_graphs[key] = (
      
            <a
            data-toggle="tooltip"
            title={`You are in the top ${percentile_val} % of the class`}
            style={{ cursor: "pointer" }}
            >
            <div style={{ width: "45rem", marginLeft: "25%" }}>
              <Bar
                data={graph_data}
                options={{
                  title: { display: false, text: key, fontSize: 20 },
                  text: ["one", "two"],
                  scales: {},
  
                  legend: {
                    display: true,
                    position: "right",
                    labels: {
                      generateLabels: function (chart) {
                        var data = chart.data;
                        if (data.labels.length && data.datasets.length) {
                          return graph_data.datasets.map(function (label, i) {
                            var textValue = "Number of Students";
                            var colorValue = "#6E85BA";
                            if (i === 1) {
                              textValue = "Your Grade";
                              colorValue = "#000000";
                            }
                            return {
                              // And finally :
                              text: textValue,
                              fillStyle: colorValue,
                              index: i,
                            };
                          });
                        }
                        return [];
                      },
                    },
                  },
                  scales: {
                    xAxes: [
                      {
                        stacked: true,
                        gridLines: {
                          color: "rgba(0, 0, 0, 0)",
                        },
                      },
                    ],
                    yAxes: [
                      {
                        stacked: true,
                        gridLines: {
                          color: "rgba(0, 0, 0, 0)",
                        },
                      },
                    ],
                  },
                }}
              />
            </div>
          </a>
          );
      }
      else{
        course_graphs[key] = (
          <a
            data-toggle="tooltip"
            title={`You are in the top ${percentile_val} % of the class`}
            style={{ cursor: "pointer" }}
          >
            <div style={{ width: "15rem",marginLeft:"0.5%" }}>
              <Bar
              height={300}
                data={graph_data}
                options={{
                  title: { display: false, text: key, fontSize: 20 },
                  text: ["one", "two"],
                  scales: {},
  
                  legend: {
                    display: true,
                    position: "top",
                    labels: {
                      generateLabels: function (chart) {
                        
                        var data = chart.data;
                        if (data.labels.length && data.datasets.length) {
                          return graph_data.datasets.map(function (label, i) {
                            var textValue = "Number of Students";
                            var colorValue = "#6E85BA";
                            if (i === 1) {
                              textValue = "Your Grade";
                              colorValue = "#000000";
                            }
                            return {
                              // And finally :
                              text: textValue,
                              fillStyle: colorValue,
                              index: i,
                            };
                          });
                        }
                        return [];
                      },
                    },
                  },
                  scales: {
                    xAxes: [
                      {
                        stacked: true,
                        gridLines: {
                          color: "rgba(0, 0, 0, 0)",
                        },
                      },
                    ],
                    yAxes: [
                      {
                        stacked: true,
                        gridLines: {
                          color: "rgba(0, 0, 0, 0)",
                        },
                      },
                    ],
                  },
                }}
              />
            </div>
          </a>
              
          );
      }
      return;
    });
  }
  updateCourseStats(course_graphs);
}

function cgpaLineGraph(props) {

  const cgpa_list = props[0];
  const student_cgpa = props[1];
  const big=props[2];
  const smll=props[3];
  
  let line_data = {};
  if (typeof cgpa_list !== typeof undefined_var) {
    const rounded_list = cgpa_list.map((each_cgpa) => {
      return parseFloat(each_cgpa).toFixed(1);
    });
    let cgpa_count = {};
    rounded_list.map((each_cgpa) => {
      if (Object.keys(cgpa_count).includes(each_cgpa)) {
        cgpa_count[each_cgpa] += 1;
      } else {
        cgpa_count[each_cgpa] = 1;
      }
    });
    const cgpa_labels = Object.keys(cgpa_count).sort(
      (a, b) => parseFloat(a) - parseFloat(b),
      1
    );
    let cgpa_values = [];
    let blank_values = [];
    let avg_values = [];

    const sum_cgpa = rounded_list.reduce(
      (a, b) => parseFloat(a) + parseFloat(b),
      0
    );
    const avg_cgpa = (sum_cgpa / rounded_list.length).toFixed(1) || 0;
    cgpa_labels.map((each_cgpa) => {
      let prev_sum = cgpa_values[cgpa_values.length - 1];
      if (typeof prev_sum === typeof undefined_var) prev_sum = 0;
      cgpa_values.push(prev_sum + parseFloat(cgpa_count[each_cgpa]));
      if (each_cgpa != student_cgpa) blank_values.push(0);
      else if (each_cgpa == student_cgpa)
        blank_values.push(prev_sum + parseFloat(cgpa_count[each_cgpa]));
      if (each_cgpa != avg_cgpa) avg_values.push(0);
      else if (each_cgpa == avg_cgpa)
        avg_values.push(prev_sum + parseFloat(cgpa_count[each_cgpa]));
    });

    line_data = {
      labels: cgpa_labels,
      datasets: [
        {
          type: "line",
          label: "Number of students",
          data: cgpa_values,
          fill: false,
          borderColor: "#6E85BA",
          tension: 0.1,
        },
        {
          type: "bar",
          label: "Your CGPA",
          data: blank_values,
          barThickness: 3,
          fill: true,
          borderColor: "rgb(0, 0, 0)",
          backgroundColor: "rgb(0, 0, 0)",
          tension: 0.1,
        },
        {
          type: "bar",
          label: "Average CGPA",
          data: avg_values,
          barThickness: 3,
          fill: true,
          borderColor: "#CC3314",
          backgroundColor: "#CC3314",
          tension: 0.1,
        },
      ],
    };
  }
  return (
    <div>
     
        {big && <Container style={{marginLeft:"25%"}}>
          <Row >
            <Col lg="7" md="12" sm="6">
          <Line 
            height={200}
            data={line_data}
            options={{
              title: {
                // responsive: true,
                // maintainAspectRatio: false,
                display: true,
                text: "Cumulative CGPA",
                fontSize: 20,
                paddingLeft:70
              },
              
              text: ["one", "two"],

              legend: {
                display: true,
                position: "top",
              },
              scales: {
                x: {
                  grid: { offset: true, beginAtZero: true },
                },
                xAxes: [
                  {
                    gridLines: {
                      color: "rgba(0, 0, 0, 0)",
                    },
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 20,
                      min: 0,
                      max: 10,
                      stepSize: 0.5,
                    },
                  },
                ],
                yAxes: [
                  {
                    gridLines: {
                      color: "rgba(0, 0, 0, 0)",
                    },
                  },
                ],
              },
            }}
          />
        </Col>
        </Row>
    </Container>}
        {smll && <Container style={{paddingLeft:"1%"}}>
          <Row >
            
            <Col lg="7" md="12" sm="6">
          <Line 
            height={350}
            data={line_data}
            options={{
              title: {
                display: true,
                text: "Cumulative CGPA",
                fontSize: 20,
                paddingLeft:70
                
              },
              
              text: ["one", "two"],

              legend: {
                display: true,
                position: "top",
              },
              scales: {
                x: {
                  grid: { offset: true, beginAtZero: true },
                },
                xAxes: [
                  {
                    gridLines: {
                      color: "rgba(0, 0, 0, 0)",
                    },

                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 20,
                      min: 0,
                      max: 10,
                      stepSize: 0.5,
                    },
                  },
                ],
                yAxes: [
                  {
                    gridLines: {
                      color: "rgba(0, 0, 0, 0)",
                    },
                  },
                ],
              },
            }}
          />
        </Col>
        </Row>
        </Container>}
    
    </div>
  
  );
}

function courseGradesGraph(props) {
  const grades = props[0];
  const courseGraphs = props[1];
  const centerCourseGraphs = props[2];
  const it_percentage = props[3];
  const barKey = props[4];
  const updateBarKey = props[5];
  const learningCenter = props[6];
  //var1
  //var2
  // const bigvar1=props[7];
  // console.log("glad")
  // console.log(bigvar1)
  // const smalvar2=props[8];
  
  let course_names = Object.keys(grades);
  let course_credit = "";
  let course_grade = "";
  let course_points = "";

  let grade_info = course_names.map((course) => {
    if (
      [
        "learning_center",
        "CGPA",
        "student_email",
        "student_name",
        "Sno",
        "roll_number",
      ].includes(course)
    ) {
      return <div></div>;
    }
    course_credit = parseInt(grades[course]["Credits"]);
    course_grade = grades[course]["Grade"];
    course_points = grades[course]["Points"];
    // console.log(course, grades[course]["Mentor"]);

    // if (typeof it_percentage[course] !== typeof undefined_var) {
    //   console.log(course, it_percentage[course][2]);
    // }
    return (
      <div>
        <Accordion >
          <Row>
          <Col lg="10" md="12" sm="12" xs="12">
          <Card style={{marginLeft:"19%"}}>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              style={{
                cursor: "pointer",
                backgroundColor: "#CC3314",
                color: "white",
              }}
            >
              {course}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Row>
                
                  <h4
                    style={{ fontFamily: "Raleway", margin: "auto" }}
                  >{`Mentor: ${grades[course]["Mentor"]}`}</h4>
                </Row>
                <br />
                  <Table responsive bordered style={{width:"70%",margin:"auto"}}>
                    <thead style={{backgroundColor:"#CC3314",color:"white",}} >
                      <th >Grade</th>
                      <th >Credits</th>
                      <th >Points</th>
                      {typeof it_percentage[course] !== typeof undefined_var ? (     
                        <th>Attendance</th>
                    ) : (
                      <React.Fragment></React.Fragment>
                    )}
                       
                    </thead>
                    <tbody>
                      <td>{course_grade}</td>
                      <td>{course_credit}</td>
                      <td>{course_points}</td>
                      {typeof it_percentage[course] !== typeof undefined_var ? (
                            <td>{it_percentage[course][2]}%</td>
                          ) : (
                            <React.Fragment></React.Fragment>
                          )}
                     
                    </tbody>
                  </Table>
                    {/* <Row>
                    
                    <Card style={{marginLeft:"15%"}}>
                        <Card.Header ><b>Grade</b></Card.Header>
                        <Card.Body>
                          <Card.Title>{course_grade}</Card.Title>
                          
                        </Card.Body>
                      </Card>
                      
                      
                      <Card style={{marginLeft:"15%"}}>
                        <Card.Header ><b>Credits</b></Card.Header>
                        <Card.Body>
                          <Card.Title>{course_credit}</Card.Title>
                         
                        </Card.Body>
                      </Card>
                      <Card  style={{marginLeft:"15%"}}>
                        <Card.Header ><b>Points</b> </Card.Header>
                        <Card.Body>
                          <Card.Title>{course_points}</Card.Title>
                         
                        </Card.Body>
                      </Card>
                    </Row> */}
                
                  {/* <Col>
                    <Card style={{ fontWeight: "bold", height: "6.2rem" }}>
                      <Card.Header>Grade</Card.Header>
                      <Card.Text style={{ margin: "auto" }}>
                        <h5>{course_grade}</h5>
                      </Card.Text>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <ListGroup variant="flush" style={{ fontWeight: "bold" }}>
                        <ListGroup.Item>
                          Credits : {course_credit}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Points : {course_points}
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </Col>
                  <Col></Col>
                </Row> */}
                <Tabs
                  id="controlled-tab-example"
                  activeKey={barKey}
                  onSelect={(k) => updateBarKey(k)}
                >
                  <Tab eventKey="main" title="Main">
                    <br />
                    <Row>
                      {courseGraphs[course]}
                      </Row>
                  </Tab>
                  <Tab eventKey={learningCenter} title={learningCenter}>
                    <br />
                    <div >
                    <Row >
                      {centerCourseGraphs[course]}
                      </Row>
                    </div>
                  </Tab>
                </Tabs>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          </Col>
          </Row>
        </Accordion>
      </div>
    );
  });
  return grade_info;
}


export default function CourseAccordion(props) {
  
  // console.log("kitten");
  // console.log(props);
  const [courseGraphs, setCourseGraphs] = React.useState({});
  const [centerCourseGraphs, setCenterCourseGraphs] = React.useState({});

  const setBig = useMediaQuery({query: '(min-width: 1224px)'})
  const setSmall = useMediaQuery({ query: '(max-width: 1224px)' })

  const [barKey, setBarKey] = React.useState("main");
  const [lineKey, setLineKey] = React.useState("main");

  const main_cgpa_list = props.courseStats["cgpa"];
  const iiith_cgpa_list = props.courseStats["iiit_cgpa"];
  const jntuh_cgpa_list = props.courseStats["jntuh_cgpa"];

  const student_cgpa = parseFloat(props.grades["CGPA"]).toFixed(1);
  const it_percentage = props.percentageIT;

  React.useEffect(() => {
    StatsGrade([props.courseStats["grades"], setCourseGraphs, props.grades,setBig,setSmall]);
  }, [props.courseStats]);

  React.useEffect(() => {
    if (props.learningCenter === "IIITH") {
      StatsGrade([
        props.courseStats["iiit_grades"],
        setCenterCourseGraphs,
        props.grades,
        setBig,
        setSmall,
      ]);
    } else if (props.learningCenter === "JNTUH") {
      StatsGrade([
        props.courseStats["jntuh_grades"],
        setCenterCourseGraphs,
        props.grades,
        setBig,
        setSmall,
      ]);
    }
  }, [props.learningCenter]);
  // const isDesktopOrLaptopBar = useMediaQuery({query: '(min-width: 1224px)'})
  
  // const isSmallScreenBar = useMediaQuery({ query: '(max-width: 1224px)' })

  const grade_info = courseGradesGraph([
    props.grades,
    courseGraphs,
    centerCourseGraphs,
    it_percentage,
    barKey,
    setBarKey,
    props.learningCenter,
    // isDesktopOrLaptopBar,
    // isSmallScreenBar

  ]);

  // let center_grade_info;
  // if (props.learningCenter === "iiith") {
  //   center_grade_info = courseGradesGraph([
  //     props.grades,
  //     iiithCourseGraphs,
  //     it_percentage,
  //   ]);
  // } else if (props.learningCenter === "jntuh") {
  //   center_grade_info = courseGradesGraph([
  //     props.grades,
  //     jntuhCourseGraphs,
  //     it_percentage,
  //   ]);
  // }
  
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1224px)' })
  const line_graph_data = cgpaLineGraph([main_cgpa_list, student_cgpa,isDesktopOrLaptop,isSmallScreen]);
  let center_line_graph_data;
  if (props.learningCenter === "IIITH") {
    center_line_graph_data = cgpaLineGraph([iiith_cgpa_list, student_cgpa]);
  } else if (props.learningCenter === "JNTUH") {
    center_line_graph_data = cgpaLineGraph([jntuh_cgpa_list, student_cgpa]);
  }

  let capitalize_student_name = "";
  if (typeof props.grades["student_name"] != typeof undefined_var) {
    let student_name_arr = props.grades["student_name"].split(" ");
    for (let i = 0; i < student_name_arr.length; i++) {
      capitalize_student_name +=
        student_name_arr[i].charAt(0).toUpperCase() +
        student_name_arr[i].slice(1).toLowerCase() +
        " ";
    }
  }
  
  return (
    
    <div>
      <div>
        <h4 style={{ fontFamily: "Raleway" }}>
          {capitalize_student_name} ({props.learningCenter})
        </h4>
        <h4 style={{ fontFamily: "Raleway" }}>CGPA: {props.grades["CGPA"]}</h4>
        <h6 style={{ fontFamily: "Raleway" }}>
          Data was last updated on {props.lastUpdated}
        </h6>
        <br />
        <Tabs
          id="controlled-tab-example"
          style={{ width: "55rem", margin: "auto" }}
          activeKey={lineKey}
          onSelect={(k) => setLineKey(k)}
        >
          <Tab eventKey="main" title="Main">
            <br />
            {line_graph_data}
          </Tab>
          <Tab eventKey={props.learningCenter} title={props.learningCenter}>
            <br />
              {center_line_graph_data}
          </Tab>
        </Tabs>
        <br />
      </div >
        {grade_info}
    </div>
  );
}
