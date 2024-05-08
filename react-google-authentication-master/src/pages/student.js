import React, { useState, useEffect } from "react";
import axios from "axios";
import Logout from "../components/Logout";
import PerformanceDisplay from "../components/NEW_PerformanceDisplay";

function Student() {
  // State to store the CSV data
  const [csvData, setCsvData] = useState([]);

  // Function to fetch CSV data from the server
  const fetchCSVData = () => {
    axios.get("/api/getCSVData") // Replace "/api/getCSVData" with your actual endpoint to fetch CSV data
      .then((response) => {
        setCsvData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching CSV data:", error);
      });
  };

  // Fetch CSV data when the component mounts
  useEffect(() => {
    fetchCSVData();
  }, []);

  return (
    <div>
      <h1>Student Page</h1>
      
      <Logout/>
    </div>
  );
}

export default Student
