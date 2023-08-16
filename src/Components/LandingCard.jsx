import React from "react";
import styled from "../Style/Landing.module.css";
import Cake from "../Img/CakeCate.png";
import FruitsCate from "../Img/FruitsCate.png";
import VegCate from "../Img/VegCate.png";
import SweetCate from "../Img/SweetCate.png";

const LandingCard = () => {
  let name = "";
  let price = "";
  let subtitle = "";
  let des = "";
  return (
    <div className={styled.LandingCard}>
      <div className={styled.LandingCard_box}>
        <div className={styled.box_text}>
          <h1>Premium Cake</h1>
          <h6>Just Starting at 99$</h6>
          <button style={{ background: "#3b71ca" }}>Buy know</button>
          <button>Add To Fav</button>
        </div>
        <div>
          <img src={Cake} alt="" />
        </div>
      </div>
      <div className={styled.LandingCard_box}>
        <div className={styled.box_text}>
          <h1>Premium Fruits</h1>
          <h6>Just Starting at 10$</h6>
          <button style={{ background: "#3b71ca" }}>Buy know</button>
          <button>Add To Fav</button>
        </div>
        <div>
          <img src={FruitsCate} alt="" />
        </div>
      </div>
      <div className={styled.LandingCard_box}>
        <div className={styled.box_text}>
          <h1>Premium Vegetables</h1>
          <h6>Just Starting at 5$</h6>
          <button style={{ background: "#3b71ca" }}>Buy know</button>

          <button>Add To Fav</button>
        </div>
        <div>
          <img src={VegCate} alt="" />
        </div>
      </div>
      <div className={styled.LandingCard_box}>
        <div className={styled.box_text}>
          <h1>Premium Sweets</h1>
          <h6>Just Starting at 199$</h6>
          <button style={{ background: "#3b71ca" }}>Buy know</button>
          <button>Add To Fav</button>
        </div>
        <div>
          <img src={SweetCate} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LandingCard;
