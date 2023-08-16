import React from "react";
import CakeBanner from "../Img/CakeBanner.PNG";
import VegBanner from "../Img/VegBanner.PNG";
import BurgerBanner from "../Img/BurgerBanner.PNG";

const Banner = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item " data-bs-interval="1000">
            <img
              height={300}
              src={CakeBanner}
              class="d-block w-100"
              alt="Cake Banner"
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              height={300}
              src={VegBanner}
              class="d-block w-100"
              alt="Vegitable Banner"
            />
          </div>
          <div class="carousel-item active " data-bs-interval="2000">
            <img
              height={300}
              src={BurgerBanner}
              class="d-block w-100"
              alt="Burger Banner"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Banner;
