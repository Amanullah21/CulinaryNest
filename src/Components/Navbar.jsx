import React from "react";
import Logo from "../Img/logo.png";
import Cart from "../Img/cart.png";
import Guest from "../Img/guest.png";
import { Link } from "react-router-dom";
import Autosearch from "./Autosearch";

const Navbar = () => {
  return (
    <>
      <div class="sticky-top">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              <img height={100} src={Logo} alt="" srcset="" />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/fav">
                    Favourites
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/foodlist"
                  >
                    Food List
                  </Link>
                </li>
              </ul>
              <form class="d-flex">
                <Autosearch />
              </form>
              <a class="navbar-brand" href="#">
                <img height={60} src={Cart} alt="" />
              </a>
              <Link to="/login">
                <img height={60} src={Guest} alt="" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
