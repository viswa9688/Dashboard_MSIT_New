import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

export default function AdminDashboard() {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("student"); // or "mentor"
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddUser = async () => {
    try {
      // Make API call to add user
      const response = await axios.post("/api/addUser", { email, userType });
      setSuccessMessage(response.data.message);
      setEmail("");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Form>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="userType">
          <Form.Label>User Type</Form.Label>
          <Form.Control
            as="select"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="mentor">Mentor</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" onClick={handleAddUser}>
          Add User
        </Button>
      </Form>

      {successMessage && <p className="text-success">{successMessage}</p>}
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
    </div>
  );
}
