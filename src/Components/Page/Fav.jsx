import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
// import SingleProduct from "./SingleProduct";

function Fav() {
  const url = "http://localhost:3000/fav";
  const [fav, setFav] = useState([]);
  const getToServer = () => {
    fetch(url)
      .then((ele) => ele.json())
      .then((ele) => setFav(ele))
      .catch((ele) => console.log(ele));
  };
  useEffect(() => getToServer(), []);
  console.log(fav);
  return (
    <MDBContainer fluid className="my-5" style={{ background: "#fff" }}>
      <MDBRow>
        {fav.map((ele) => (
          <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
            <MDBCard>
              <div className="d-flex justify-content-between p-3">
                <p className="lead mb-0">{ele.offer}</p>
                <div
                  className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                  style={{ width: "35px", height: "35px" }}
                >
                  <p className="text-white mb-0 small">4X</p>
                </div>
              </div>
              <MDBCardImage src={ele.url} position="top" alt="Laptop" />
              <MDBCardBody>
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      {ele.cate}
                    </a>
                  </p>
                  <p className="small text-danger">
                    <s>{ele.price}</s>
                  </p>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">{ele.name}</h5>
                  <h5 className="text-dark mb-0">{ele.price}</h5>
                </div>

                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">
                    Available: <span class="fw-bold">20KG</span>
                  </p>
                  <div class="ms-auto text-warning">
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>

    </MDBContainer>
  );
}

export default Fav;
