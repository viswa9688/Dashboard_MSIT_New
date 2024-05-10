import React, { useState } from "react";

function AddUser() {
 
  const countryCodeOptions = ["+91", "+1", "+44", "+61", "+86"];

  const [selectedAction, setSelectedAction] = useState("addSingleUser");
  const [file, setFile] = useState(null); // State to store the uploaded file

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    console.log("Uploaded file:", file);
    // You can send the file to your backend or perform any other actions
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "0.625rem 0.9375rem", margin: "auto", width: "100%", fontSize: "0.875rem", color: "#000000", backgroundColor: "#FFFFFF", maxWidth: "480px" }}>
      <header>
        <h1 style={{ alignSelf: "center", fontSize: "1.875rem", fontWeight: "bold", lineHeight: "2.5rem", letterSpacing: "tight" }}>
          MSIT Dashboard
        </h1>
      </header>
      <nav style={{ display: "flex", padding: "0.25rem 0", marginTop: "0.5rem", fontWeight: "bold", backgroundColor: "#E5E5E5", borderRadius: "0.75rem" }}>
        <div
          style={{
            justifyContent: "center",
            padding: "0.75rem 1.5rem",
            marginLeft: "1rem",
            cursor: "pointer",
            backgroundColor: selectedAction === "addSingleUser" ? "#FFFFFF" : "",
            borderRadius: "1rem",
          }}
          onClick={() => setSelectedAction("addSingleUser")}
        >
          Add Single User
        </div>
        <div
          style={{
            justifyContent: "center",
            padding: "0.75rem 1.5rem",
            marginLeft: "4rem",
            cursor: "pointer",
            backgroundColor: selectedAction === "uploadData" ? "#FFFFFF" : "",
            borderRadius: "1rem",
          }}
          onClick={() => setSelectedAction("uploadData")}
        >
          Upload Data
        </div>
      </nav>
      <main>
        {selectedAction === "addSingleUser" && (
          <form>
            <div style={{ marginTop: "1.5rem" }}>Name*</div>
            <input
              style={{ width: "380px", marginLeft: "0.375rem", padding: "0.75rem 1rem", borderRadius: "0.75rem", border: "1px solid #E5E5E5", color: "rgba(0, 0, 0, 0.5)" }}
              placeholder="Name"
              type="name"
            />
            <div style={{ marginTop: "1.5rem" }}>Email Address*</div>
            <input
              style={{ width: "380px", marginLeft: "0.375rem", padding: "0.75rem 1rem", borderRadius: "0.75rem", border: "1px solid #E5E5E5", color: "rgba(0, 0, 0, 0.5)" }}
              placeholder="Your email"
              type="email"
            />
            <div style={{ marginTop: "1.5rem" }}>ID number</div>
            <input
              style={{ width: "380px", marginLeft: "0.375rem", padding: "0.75rem 1rem", borderRadius: "0.75rem", border: "1px solid #E5E5E5", color: "rgba(0, 0, 0, 0.5)" }}
              placeholder="ID number"
              type="Id number"
            />
            <div style={{ marginTop: "1.5rem" }}>Phone Number*</div>
            <div style={{ display: "flex" }}>
              <select style={{ width: "60px", borderRadius: "0.75rem", border: "1px solid #E5E5E5", color: "rgba(0, 0, 0, 0.5)" }}>
                {countryCodeOptions.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
              </select>
              <input
                style={{ width: "380px", marginLeft: "0.375rem", padding: "0.75rem 1rem", borderRadius: "0.75rem", border: "1px solid #E5E5E5", color: "rgba(0, 0, 0, 0.5)" }}
                placeholder="Mobile number"
                type="email"
              />
            </div>
            <div style={{ marginTop: "1.5rem" }}>Role</div>
            <input
              style={{ width: "380px", marginLeft: "0.375rem", padding: "0.75rem 1rem", borderRadius: "0.75rem", border: "1px solid #E5E5E5", color: "rgba(0, 0, 0, 0.5)" }}
              placeholder="Role"
              type="role"
            />
            <div style={{ marginTop: "1.5rem" }}>Batch</div>
            <input
              style={{ width: "380px", marginLeft: "0.375rem", padding: "0.75rem 1rem", borderRadius: "0.75rem", border: "1px solid #E5E5E5", color: "rgba(0, 0, 0, 0.5)" }}
              placeholder="Batch"
              type="batch"
            />
            <button
              type="submit"
              style={{ alignSelf: "center", padding: "1rem 4rem", marginTop: "1.5rem", fontSize: "1rem", fontWeight: "bold", textAlign: "center", color: "#FFFFFF", backgroundColor: "#000000", borderRadius: "0.75rem" }}
            >
              Submit
            </button>
          </form>
        )}
         {selectedAction === "uploadData" && (
          <div style={{ marginTop: "1.5rem" }}>
            {/* File input for uploading data */}
            <input type="file" onChange={handleFileChange} />
            {/* Button to trigger file upload */}
            <button
              type="button"
              onClick={handleUpload}
              style={{ alignSelf: "center", padding: "1rem 4rem", fontSize: "1rem", fontWeight: "bold", textAlign: "center", color: "#FFFFFF", backgroundColor: "#000000", borderRadius: "0.75rem", marginTop: "0.5rem" }}
            >
              Upload
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default AddUser;
