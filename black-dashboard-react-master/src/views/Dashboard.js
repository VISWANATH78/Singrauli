import React, { useState } from "react";
import classNames from "classnames";
import { Line, Bar, Pie, Radar } from "react-chartjs-2"; // Import Radar for skills enhancement

import {
  Button,
  ButtonGroup,
  Card,
  Row,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";

function Dashboard(props) {
  const [bigChartData, setbigChartData] = useState("data1");

  const setBgChartData = (name) => {
    setbigChartData(name);
  };

  // Sample data for Counselling and Mentorship Sessions
  const counsellingData = {
    sessions: [5, 10, 8], // Number of sessions
    topicsCovered: ["Topic 1", "Topic 2", "Topic 3"], // Topics covered
    participantDemographics: {
      // Demographic heat map data
      age: [18, 25, 30],
      gender: ["Male", "Female", "Other"],
      // Add more demographics as needed
    }
  };
  
  // Sample data for Digital Literacy Workshops
  const digitalLiteracyData = {
    workshops: [10, 20, 15], // Number of workshops
    attendance: [150, 300, 250], // Attendance
    feedbackRatings: [80, 90, 70], // Feedback/Ratings
  };

  // Sample data for Teacher Training Programs
  const teacherTrainingData = {
    trainingPrograms: [3, 5, 4], // Number of training programs
    skillsEnhanced: [
      { before: [10, 60, 70], after: [80, 90, 95] }, // Sample data for skills enhanced
      { before: [60, 70, 80], after: [70, 80, 85] },
      { before: [70, 75, 85], after: [85, 90, 95] },
    ],
    postTrainingSurveys: [100, 85, 88], // Post-training surveys
  };
  const communityOutreachData = {
    events: [15, 10, 12], // Number of events
    attendance: [300, 200, 250], // Attendance
    communityFeedback: [
      // Sample feedback data (replace with your actual data)
      "Positive feedback about Event 1",
      "Neutral feedback about Event 2",
      "Positive feedback about Event 3",
    ],
  };

  return (
    <>
      <div className="content">
        {/* ... Existing code ... */}
        <card>
        <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Digital Literacy Workshops</h5>
                <CardTitle tag="h3">
                  Workshops: {digitalLiteracyData.workshops.reduce((a, b) => a + b, 0)}
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={{
                      labels: ["Workshop 1", "Workshop 2", "Workshop 3"],
                      datasets: [
                        {
                          label: "Number of Workshops",
                          data: digitalLiteracyData.workshops,
                          backgroundColor: ["skyblue", "#EA6A47", "#6AB187"],
                        },
                      ],
                    }}
                    options={{
                      scales: {
                        y: {
                          beginAtZero: true,
                        },
                      },
                    }}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Attendance</h5>
                <CardTitle tag="h3">
                  Attendance: {digitalLiteracyData.attendance.reduce((a, b) => a + b, 0)}
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={{
                      labels: ["Workshop 1", "Workshop 2", "Workshop 3"],
                      datasets: [
                        {
                          label: "Attendance",
                          data: digitalLiteracyData.attendance,
                          backgroundColor: ["skyblue", "#EA6A47", "#6AB187"],
                        },
                      ],
                    }}
                    options={{
                      scales: {
                        y: {
                          beginAtZero: true,
                        },
                      },
                    }}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Feedback/Ratings</h5>
                <CardTitle tag="h3">
                  Ratings
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Pie
                    data={{
                      labels: ["Workshop 1", "Workshop 2", "Workshop 3"],
                      datasets: [
                        {
                          data: digitalLiteracyData.feedbackRatings,
                          backgroundColor: ["skyblue", "#EA6A47", "#6AB187"]
                        },
                      ],
                    }}
                    options={{
                      maintainAspectRatio: false,
                    }}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </card>

        <card>
        <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Counselling and Mentorship Sessions</h5>
                <CardTitle tag="h3">
                  Sessions: {counsellingData.sessions.reduce((a, b) => a + b, 0)}
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={{
                      labels: ["Session 1", "Session 2", "Session 3"],
                      datasets: [
                        {
                          label: "Number of Sessions",
                          data: counsellingData.sessions,
                          backgroundColor: ['#a6c84c', '#ffa022', '#46bee9'],
                        },
                      ],
                    }}
                    options={{
                      scales: {
                        y: {
                          beginAtZero: true,
                        },
                      },
                    }}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Topics Covered</h5>
                <CardTitle tag="h3">
                  Topics
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Pie
                    data={{
                      labels: counsellingData.topicsCovered,
                      datasets: [
                        {
                          data: [10, 20, 15], // Sample data, replace with actual data
                          backgroundColor: ['#a6c84c', '#ffa022', '#46bee9'],
                        },
                      ],
                    }}
                    options={{
                      maintainAspectRatio: false,
                    }}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            {/* Add demographic heat map or other visualizations for participant demographics here */}
          </Col>
        </Row>
        </card>

        <card>
        <Row>
          <Col lg="4">
            <Card className="card-chart" style={{ height:"435px" }}>
              <CardHeader>
                <h5 className="card-category">Teacher Training Programs</h5>
                <CardTitle tag="h3">
                  Programs: {teacherTrainingData.trainingPrograms.reduce((a, b) => a + b, 0)}
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area" >
                  <Bar
                    data={{
                      labels: ["Program 1", "Program 2", "Program 3"],
                      datasets: [
                        {
                          label: "Number of Programs",
                          data: teacherTrainingData.trainingPrograms,
                          backgroundColor: ["#90ee91", "#d2b48c", "#fa8072"],
                        },
                      ],
                    }}
                    options={{
                      scales: {
                        y: {
                          beginAtZero: true,
                        },
                      },
                    }}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
  <Card className="card-chart">
    <CardHeader>
      <h5 className="card-category">Skills Enhanced</h5>
      <CardTitle tag="h3">
        Skills Enhancement
      </CardTitle>
    </CardHeader>
    <CardBody>
      <div className="chart-area" style={{ height:"480px" }}> {/* Added style */}
        <Radar
          data={{
            labels: ["Program 1", "Program 2", "Program 3"],
            datasets: [
              {
                label: "Before Training",
                data: [20, 30, 60],
                borderColor: "#FF5733",
                backgroundColor: "rgba(255, 87, 51, 0.2",
                pointBackgroundColor: "#FF5733",
              },
              {
                label: "After Training",
                data: [70, 80, 95],
                borderColor: "#33FF57",
                backgroundColor: "rgba(51, 255, 87, 0.2)",
                pointBackgroundColor: "#33FF57",
              },
            ],
          }}
          options={{
            scale: {
              angleLines: { display: true },
            },
          }}
        />
      </div>
    </CardBody>
  </Card>
</Col>

          <Col lg="4">
            {/* Add post-training surveys visualization here */}
          </Col>
        </Row>
        </card>

        <card>
        <Row>
  <Col lg="4">
    <Card className="card-chart">
      <CardHeader>
        <h5 className="card-category">Community Outreach Events</h5>
        <CardTitle tag="h3">
          Events: {communityOutreachData.events.reduce((a, b) => a + b, 0)}
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div className="chart-area">
          <Bar
            data={{
              labels: ["Event 1", "Event 2", "Event 3"],
              datasets: [
                {
                  label: "Number of Events",
                  data: communityOutreachData.events,
                  backgroundColor: ["skyblue", "#EA6A47", "#6AB187"],
                },
              ],
            }}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      </CardBody>
    </Card>
  </Col>
  <Col lg="4">
    <Card className="card-chart">
      <CardHeader>
        <h5 className="card-category">Attendance and Engagement</h5>
        <CardTitle tag="h3">
          Attendance: {communityOutreachData.attendance.reduce((a, b) => a + b, 0)}
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div className="chart-area">
          <Bar
            data={{
              labels: ["Event 1", "Event 2", "Event 3"],
              datasets: [
                {
                  label: "Attendance",
                  data: communityOutreachData.attendance,
                  backgroundColor:["skyblue", "#EA6A47", "#6AB187"],
                },
              ],
            }}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      </CardBody>
    </Card>
  </Col>
  <Col lg="4">
    {/* Add word clouds or sentiment analysis for community feedback here */}
  </Col>
</Row>
        </card>
      </div>
    </>
  );
}

export default Dashboard;
