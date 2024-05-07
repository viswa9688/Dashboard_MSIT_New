import axios from "axios";
import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { withRouter } from "react-router-dom";

const clientId = "517972967421-7vd20rig40hriq0rlapi67al4q717n05.apps.googleusercontent.com";

function Login(props) {
  const [userData, setUserData] = useState([]);
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    axios.get("/Data.csv").then((response) => {
      const parsedData = parseCSV(response.data);
      setUserData(parsedData);
    });
  }, []);

  useEffect(() => {
    if (userData.length > 0 && redirected) {
      redirectToRolePage();
    }
  }, [userData, redirected]);

  const parseCSV = (csvData) => {
    const lines = csvData.split("\n");
    const data = lines.slice(1).map((line) => {
      const [email, role] = line.split(",");
      return { email, role };
    });
    return data;
  };

  const redirectToRolePage = () => {
    const userEmail = localStorage.getItem("userEmail");
    const user = userData.find((user) => user.email === userEmail);
    if (user) {
      switch (user.role) {
        case "admin":
          props.history.push("/admin");
          break;
        case "mentor":
          props.history.push("/mentor");
          break;
        case "student":
          props.history.push("/student");
          break;
        default:
          break;
      }
    } else {
      alert("User not found or role not specified.");
    }
  };

  const onSuccess = (res) => {
    localStorage.setItem("userEmail", res.profileObj.email);
    setRedirected(true); // Set redirected to true to trigger redirection
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login.`);
  };

  return (
    <div>
      {redirected ? null : (
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          style={{ marginTop: "0px" }}
          isSignedIn={true}
        />
      )}
      <br />
      <br />
    </div>
  );
}

export default withRouter(Login);
