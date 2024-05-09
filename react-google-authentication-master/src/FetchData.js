import axios from "axios";
import React, { useState, useEffect } from "react";

function StudentScores() {
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/student-scores/hrenikinidi@msitprogram.net", {
          headers: {
            "Access-Control-Allow-Origin": "*", // Add your desired headers here
          },
        });
        setStudentData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!studentData || studentData.length === 0) return <div>No data available</div>;

  return (
    <div>
      <h1>Student Scores</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email ID</th>
            <th>Discussions (10%)</th>
            <th>Quiz (10%)</th>
            <th>Assignment (20%)</th>
            <th>Weekly (30%)</th>
            <th>Total (70%)</th>
            <th>End Sem (30%)</th>
            <th>Total (100)</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student, index) => (
            <tr key={index}>
              <td>{student["Name"]}</td>
              <td>{student["Email ID"]}</td>
              <td>{student["Discussions (10%)"]}</td>
              <td>{student["Quiz (10%)"]}</td>
              <td>{student["Assignment (20%)"]}</td>
              <td>{student["Weekly (30%)"]}</td>
              <td>{student["Total (70%)"]}</td>
              <td>{student["End Sem (30%)"]}</td>
              <td>{student["Total (100)"]}</td>
              <td>{student["Grade "]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentScores;
