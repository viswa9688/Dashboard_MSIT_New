import React, { useState, useEffect } from "react";
import Logout from "../components/Logout";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom"; 

function Admin() {
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
      
      {/* Button using Tailwind CSS */}
      <Link to="/add-user">
        <button className="p-2 m-1 bg-primary">Add user</button>
      </Link>

      <Logout />
    </div>
  );
}

export default Admin;
