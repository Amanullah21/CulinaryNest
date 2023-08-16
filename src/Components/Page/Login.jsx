import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Login() {
  const init = {
    name: "",
    email: "",
    password: "",
  };

  const url = "http://localhost:3000/profile";
  const [data, setData] = useState(init);
  const [profile, setProfile] = useState([]);

  const inputhandle = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const aman = useNavigate();
  const submitBtn = () => {
    aman("/");
    if (profile.find((user) => user.email == data.email)) {
      aman("/");
      console.log(true);
    } else {
      alert("Enter Correct email, name, password");
    }
  };

  const getToServer = () => {
    fetch(url)
      .then((ele) => ele.json())
      .then((ele) => setProfile(ele))
      .catch((ele) => console.log(ele));
  };
  useEffect(() => getToServer(), []);
  return (
    <MDBContainer
      fluid
      
    >
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <h3 classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Welcome to Login Dashboard
              </h3>
              <br />
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  size="lg"
                  id="form1"
                  type="text"
                  className="w-100"
                  placeholder="Enter Your Name"
                  onChange={inputhandle}
                  name="name"
                  value={data.name}
                />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput
                  size="lg"
                  id="form2"
                  onChange={inputhandle}
                  placeholder=" Enter Email Id"
                  name="email"
                  value={data.email}
                />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput
                  size="lg"
                  id="form3"
                  type="password"
                  onChange={inputhandle}
                  placeholder=" Enter Password"
                  name="password"
                  value={data.password}
                />
              </div>
              <button
                style={{
                  height: "50px",
                  background: "#3b71ca",
                  width: "250px",
                }}
                className="mb-4 gradient-custom-4"
                size="xl"
                onClick={submitBtn}
              >
                Login
              </button>
              <Link to="/signin">
                <button
                  style={{ height: "50px", width: "250px" }}
                  className="mb-4  gradient-custom-4"
                  size="xl"
                >
                  Sign In
                </button>
                <br />
              </Link>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
