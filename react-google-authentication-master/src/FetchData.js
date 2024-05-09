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

  const tableStyle = {
    width: '80%', // Set the width of the table
    margin: 'auto', // Center the table horizontally
    marginTop: '0px', // Add spacing on top
    marginBottom: '20px', // Add spacing on bottom
    borderCollapse: 'collapse',
  };
  const thStyle = {
    backgroundColor: '#F2F2F2', // Light cement color for heading row
    border: '1px solid black', // Black border for outside table lines
    padding: '8px',
  };
  const cellStyle = {
    border: '1px solid black', // Black border for outside table lines
    padding: '8px',
  };

  return (
    <div>
      <h1>Student Scores</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email ID</th>
            <th style={thStyle}>Discussions (10%)</th>
            <th style={thStyle}>Quiz (10%)</th>
            <th style={thStyle}>Assignment (20%)</th>
            <th style={thStyle}>Weekly (30%)</th>
            <th style={thStyle}>Total (70%)</th>
            <th style={thStyle}>End Sem (30%)</th>
            <th style={thStyle}>Total (100)</th>
            <th style={thStyle}>Grade</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student, index) => (
            <tr key={index}>
              {Object.keys(student).map((key) => (
                <td style={cellStyle} key={key}>{student[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentScores;
