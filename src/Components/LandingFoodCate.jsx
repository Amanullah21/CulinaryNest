import React from "react";
import styled from "../Style/Landing.module.css";
import Cake from "../Img/Cake.PNG";
import Veg from "../Img/Veg.PNG";
import NonVeg from "../Img/NonVeg.PNG";
import Fruits from "../Img/Fruits.PNG";
import Fastfood from "../Img/Fastfood.PNG";
import Sweets from "../Img/Sweet.PNG";

const LandingFoodCate = () => {
  return (
    <div className={styled.landing_cate}>
      <div className={styled.cate_box}>
        <a href="">
          <img src={Cake} alt="Cake" />
          <p>Cake</p>
        </a>
      </div>
      <div className={styled.cate_box}>
        <a href="">
          <img src={Veg} alt="Vegotable" />
          <p>Veg</p>
        </a>
      </div>
      <div className={styled.cate_box}>
        <a href="">
          <img src={NonVeg} alt="Non-Vegitable" />
          <p>Non-veg</p>
        </a>
      </div>
      <div className={styled.cate_box}>
        <a href="">
          <img src={Fruits} alt="Fruits" />
          <p>Fruits</p>
        </a>
      </div>
      <div className={styled.cate_box}>
        <a href="">
          <img src={Sweets} alt="Sweets" />
          <p>Sweets</p>
        </a>
      </div>
      <div className={styled.cate_box}>
        <a href="">
          <img src={Fastfood} alt="Fastfood" />
          <p>Fastfood</p>
        </a>
      </div>
    </div>
  );
};

export default LandingFoodCate;
