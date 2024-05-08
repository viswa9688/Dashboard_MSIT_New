import React, { useState } from "react";

function InputField({ label, placeholder, type = "text" }) {
  return (
    <>
      <div style={{ marginTop: "1.5rem" }}>{label}</div>
      <div
        style={{
          justifyContent: "center",
          padding: "0.75rem 1rem",
          marginTop: "0.625rem",
          fontSize: "1rem",
          backgroundColor: "#FFFFFF",
          borderRadius: "0.75rem",
          border: "1px solid #E5E5E5",
          color: "rgba(0, 0, 0, 0.5)",
        }}
      >
        {placeholder}
      </div>
    </>
  );
}

function SelectField({ label, options }) {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", padding: "0 1rem", paddingBottom: "0.5rem", marginTop: "0.375rem" }}>
        {/* Select options go here */}
      </div>
    </>
  );
}

function A() {
  const [selectedAction, setSelectedAction] = useState("addSingleUser");
  const countryCodeOptions = ["+91", "+1", "+44", "+61", "+86"];

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
            marginLeft: "1rem",
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
        <form>
          <InputField label="Name*" placeholder="Your Name" type="name" />
          <InputField label="Email Address*" placeholder="Your email" type="email" />
          <InputField label="ID Number*" placeholder="Your ID" type="ID" />
          <div style={{ marginTop: "1.5rem" }}>Phone Number*</div>
          <div style={{ display: "flex" }}>
            <select style={{ width: "60px", borderRadius: "0.75rem", border: "1px solid #E5E5E5", color: "rgba(0, 0, 0, 0.5)" }}>
              {countryCodeOptions.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
            <input
              style={{ width: "380px", marginLeft: "0.375rem", padding: "0.75rem 1rem", borderRadius: "0.75rem", border: "1px solid #E5E5E5", color: "rgba(0, 0, 0, 0.5)" }}
              placeholder="Your email"
              type="email"
            />
          </div>
          <InputField label="Role*" placeholder="Role" type="role" />
          <InputField label="Batch" placeholder="Your Batch" type="batch" />
          <button
            type="submit"
            style={{ alignSelf: "center", padding: "1rem 4rem", marginTop: "1.5rem", fontSize: "1rem", fontWeight: "bold", textAlign: "center", color: "#FFFFFF", backgroundColor: "#000000", borderRadius: "0.75rem" }}
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}

export default AddUser;
