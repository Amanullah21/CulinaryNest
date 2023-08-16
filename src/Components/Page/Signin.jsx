import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
  const [profile, setProfile] = useState([]);
  const url = "http://localhost:3000/profile";
  const init = {
    name: "",
    email: "",
    password: "",
    mobile: "",
  };
  const [data, setData] = useState(init);
  const navigate = useNavigate();
  const inputhandle = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitBtn = () => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    navigate("/login");
  };
  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center bg-image"
      style={{
        backgroundImage:
          "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
      }}
    >
      <div className="mask gradient-custom-3"></div>
      <MDBCard className="m-5" style={{ maxWidth: "500px" }}>
        <MDBCardBody className="px-5">
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput
            wrapperClass="mb-4"
            size="lg"
            id="form1"
            type="text"
            placeholder="Enter Your Name"
            onChange={inputhandle}
            name="name"
            value={data.name}
          />
          <MDBInput
            wrapperClass="mb-4"
            size="lg"
            id="form2"
            type="email"
            onChange={inputhandle}
            placeholder=" Enter Email Id"
            name="email"
            value={data.email}
          />
          <MDBInput
            wrapperClass="mb-4"
            size="lg"
            id="form3"
            type="password"
            onChange={inputhandle}
            placeholder=" Enter Password"
            name="password"
            value={data.password}
          />
          <MDBInput
            wrapperClass="mb-4"
            size="lg"
            id="form4"
            type="tel"
            onChange={inputhandle}
            placeholder=" Enter Mobile No"
            name="mobile"
            value={data.mobile}
          />
          <button
            style={{ height: "50px", background: "#3b71ca" }}
            className="mb-4 w-100 gradient-custom-4"
            size="xl"
            onClick={submitBtn}
          >
            Register
          </button>
          <Link to="/login">
            <button
              style={{ height: "50px" }}
              className="mb-4 w-100 gradient-custom-4"
              size="xl"
            >
              Login{" "}
            </button>
          </Link>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signin;
